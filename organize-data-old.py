import json
import os
import re
import requests
import urllib.parse
from urllib.parse import urlparse

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
    text = re.sub(r"[^a-z0-9-]", "", text)  # Remove non-alphanumeric/hyphen
    text = text.strip("-")  # Remove leading/trailing hyphens
    return text


def get_file_extension(url):
    """
    Safely extracts the file extension from a URL.
    Defaults to .jpg if no extension is found.
    """
    try:
        path = urlparse(url).path
        ext = os.path.splitext(path)[1]
        if ext:
            return ext
    except Exception:
        pass  # Fallback to default
    return ".jpg"


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
        if (
            item.get("featured_image_url") == "Image not found"
            or item.get("content_html") == "Content not found"
            or not item.get("featured_image_url")  # Handle None/empty
            or not item.get("content_html")
        ):

            invalid_items.append(item)
        else:
            valid_items.append(item)

    # Save invalid items
    with open(UNLABELED_FILE, "w", encoding="utf-8") as f:
        json.dump(invalid_items, f, indent=2, ensure_ascii=False)
    print(f"Filtered {len(invalid_items)} invalid items -> {UNLABELED_FILE}")

    # --- 4. Process Valid Items ---
    print(f"Processing {len(valid_items)} valid items...")
    processed_blogs = []
    processed_products = []

    for item in valid_items:
        try:
            # --- 4a. Generate Unique ID (Slug) ---
            title = item.get("title", "untitled")
            item_id = slugify(title)

            # --- 4b. Download & Save Image ---
            download_url = item.get("featured_image_url")

            file_ext = get_file_extension(download_url)
            image_filename = f"{item_id}{file_ext}"
            image_save_path = os.path.join(IMAGE_DIR, image_filename)
            image_relative_path = f"/images/{image_filename}"  # Path for Next.js

            # Download only if the file doesn't already exist
            if not os.path.exists(image_save_path):
                try:
                    response = requests.get(download_url, timeout=10)
                    response.raise_for_status()  # Check for 4xx/5xx errors

                    with open(image_save_path, "wb") as f:
                        f.write(response.content)
                    print(f"  Downloaded: {image_filename}")

                except requests.RequestException as e:
                    print(
                        f"  Error downloading {download_url}: {e}. Skipping image for '{title}'."
                    )
                    image_relative_path = None  # Set image to null if download fails

            # --- 4c. Create Final Processed Object ---
            processed_item = {
                "id": item_id,
                "name": title,
                "description": item.get("content_html"),
                "image": image_relative_path,  # The new relative path
                "category": slugify(item.get("category", "uncategorized")),
                "type": item.get("type"),
            }

            # --- 4d. Separate Blogs and Products ---
            if processed_item["type"] == "blog":
                processed_blogs.append(processed_item)
            elif processed_item["type"] == "product":
                processed_products.append(processed_item)

        except Exception as e:
            print(f"Fatal error processing item '{item.get('title')}': {e}. Skipping.")

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


# --- Run the script ---
if __name__ == "__main__":
    main()
