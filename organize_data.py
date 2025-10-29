import json
import os
import re
import requests
import urllib.parse
from urllib.parse import urlparse
from bs4 import BeautifulSoup  # Import BeautifulSoup

# --- Configuration ---
INPUT_FILE = "scraped_data_FINAL.json"
UNLABELED_FILE = "unlabeled_data.json"

OUTPUT_DIR = "output"
IMAGE_DIR = os.path.join(OUTPUT_DIR, "images")
BLOGS_FILE = os.path.join(OUTPUT_DIR, "blogs.json")
PRODUCTS_FILE = os.path.join(OUTPUT_DIR, "products.json")


def slugify(text):
    """
    Creates a URL-safe slug from a title.
    e.g., "Fine Pink Salt (1kg)" -> "fine-pink-salt-1kg"
    """
    if not text:
        return "untitled"
    text = text.lower()
    text = re.sub(r"\s+", "-", text)  # Replace spaces with hyphens
    # Remove non-alphanumeric/hyphen, allowing basic chars
    text = re.sub(r"[^a-z0-9\-._~]", "", text)
    text = text.strip("-")  # Remove leading/trailing hyphens
    # Prevent excessively long slugs if needed
    return text[:80]  # Limit slug length


def get_file_extension(url):
    """
    Safely extracts the file extension from a URL.
    Defaults to .jpg if no extension is found or on error.
    """
    try:
        path = urlparse(url).path
        ext = os.path.splitext(path)[1]
        # Basic check for common image types
        if ext.lower() in [".jpg", ".jpeg", ".png", ".gif", ".webp"]:
            return ext.lower()
    except Exception:
        pass  # Fallback to default
    print(
        f"   Warning: Could not determine valid extension for {url}. Defaulting to .jpg"
    )
    return ".jpg"


def clean_html(html_content):
    """
    Uses BeautifulSoup to remove 'class' and 'id' attributes from all tags.
    Keeps basic structure like <p>, <strong>, <ul>, <li>.
    """
    if not html_content:
        return ""
    try:
        soup = BeautifulSoup(html_content, "html.parser")
        # Find all tags
        for tag in soup.find_all(True):
            # Remove 'class' and 'id' attributes if they exist
            if tag.has_attr("class"):
                del tag["class"]
            if tag.has_attr("id"):
                del tag["id"]
            # Optionally remove other attributes like 'style', 'data-*'
            # attrs_to_remove = [k for k in tag.attrs if k.startswith('data-') or k == 'style']
            # for attr in attrs_to_remove:
            #     del tag[attr]

        # Return the cleaned HTML as a string
        # If the original content started with a single container div (like elementor), extract its contents
        if soup.contents and len(soup.contents) == 1 and soup.contents[0].name == "div":
            return "".join(str(child) for child in soup.contents[0].contents).strip()
        else:
            return str(soup).strip()
    except Exception as e:
        print(f"   Error cleaning HTML: {e}. Returning original.")
        return html_content  # Return original if cleaning fails


def main():
    print(f"Starting data processing...")

    # --- 1. Create Output Directories ---
    os.makedirs(IMAGE_DIR, exist_ok=True)
    print(f"Ensured directories exist: {OUTPUT_DIR}/ and {IMAGE_DIR}/")

    # --- 2. Read Input File ---
    try:
        with open(INPUT_FILE, "r", encoding="utf-8") as f:
            all_data = json.load(f)
        print(f"Loaded {len(all_data)} items from {INPUT_FILE}")
    except FileNotFoundError:
        print(f"Error: Input file not found at {INPUT_FILE}")
        return
    except json.JSONDecodeError:
        print(f"Error: Could not decode JSON from {INPUT_FILE}")
        return

    # --- 3. Filter Invalid Data ---
    valid_items = []
    invalid_items = []

    for item in all_data:
        image_url = item.get("featured_image_url")
        content = item.get("content_html")
        if (
            not image_url
            or image_url == "Image not found"
            or not content
            or content == "Content not found"
            or item.get("type") == "unknown"  # Also filter unknown types
        ):
            invalid_items.append(item)
        else:
            valid_items.append(item)

    # Save invalid items
    try:
        with open(UNLABELED_FILE, "w", encoding="utf-8") as f:
            json.dump(invalid_items, f, indent=2, ensure_ascii=False)
        print(
            f"Filtered {len(invalid_items)} invalid/incomplete items -> {UNLABELED_FILE}"
        )
    except Exception as e:
        print(f"Error writing unlabeled data file: {e}")

    # --- 4. Process Valid Items ---
    print(f"Processing {len(valid_items)} valid items...")
    processed_blogs = []
    processed_products = []
    processed_ids = set()  # To ensure unique IDs

    for item in valid_items:
        try:
            # --- 4a. Generate Unique ID (Slug) ---
            title = item.get("title", "untitled")
            base_slug = slugify(title)
            item_id = base_slug
            counter = 1
            # Ensure ID is unique
            while item_id in processed_ids:
                item_id = f"{base_slug}-{counter}"
                counter += 1
            processed_ids.add(item_id)

            # --- 4b. Download & Save Image ---
            download_url = item.get("featured_image_url")
            image_relative_path = None  # Default to None

            if download_url:
                file_ext = get_file_extension(download_url)
                image_filename = f"{item_id}{file_ext}"
                image_save_path = os.path.join(IMAGE_DIR, image_filename)
                image_relative_path = f"/images/{image_filename}"  # Path for Next.js

                if not os.path.exists(image_save_path):
                    try:
                        print(f"  Downloading image for '{title}'...")
                        response = requests.get(
                            download_url,
                            timeout=15,
                            headers={"User-Agent": "Mozilla/5.0"},
                        )  # Add User-Agent
                        response.raise_for_status()

                        with open(image_save_path, "wb") as f:
                            f.write(response.content)
                        print(f"   -> Saved: {image_filename}")

                    except requests.RequestException as e:
                        print(
                            f"   Error downloading {download_url}: {e}. Skipping image."
                        )
                        image_relative_path = None  # Reset on failure
                else:
                    # print(f"   Image already exists: {image_filename}") # Optional: uncomment for verbose output
                    pass

            # --- 4c. Clean HTML Description ---
            original_html = item.get("content_html", "")
            cleaned_description = clean_html(
                original_html
            )  # Call the cleaning function

            # --- 4d. Create Final Processed Object ---
            processed_item = {
                "id": item_id,
                "name": title,
                "description": cleaned_description,  # Use the cleaned HTML
                "image": image_relative_path,
                "category": slugify(item.get("category", "uncategorized")),
                "type": item.get("type"),
            }

            # --- 4e. Separate Blogs and Products ---
            if processed_item["type"] == "blog":
                processed_blogs.append(processed_item)
            elif processed_item["type"] == "product":
                processed_products.append(processed_item)

        except Exception as e:
            print(f"Fatal error processing item '{item.get('title')}': {e}. Skipping.")
            import traceback

            traceback.print_exc()  # Print full error trace for debugging

    # --- 5. Write Output Files ---
    try:
        with open(BLOGS_FILE, "w", encoding="utf-8") as f:
            json.dump(processed_blogs, f, indent=2, ensure_ascii=False)
        print(f"\nSaved {len(processed_blogs)} blogs -> {BLOGS_FILE}")

        with open(PRODUCTS_FILE, "w", encoding="utf-8") as f:
            json.dump(processed_products, f, indent=2, ensure_ascii=False)
        print(f"Saved {len(processed_products)} products -> {PRODUCTS_FILE}")

    except Exception as e:
        print(f"Error writing final JSON files: {e}")

    print("\n--- Processing Complete ---")
    print(f"Find your organized data in the '{OUTPUT_DIR}/' directory.")
    print(
        f"Ensure you move the '{IMAGE_DIR}/' contents to your Next.js '/public/images/' folder."
    )
    print(
        f"Ensure you move '{BLOGS_FILE}' and '{PRODUCTS_FILE}' to your Next.js '/src/data/' folder."
    )


# --- Run the script ---
if __name__ == "__main__":
    main()
