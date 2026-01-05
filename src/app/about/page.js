import React from "react";
import path from "path";
import fs from "fs";
import PageBanner from "@/components/PageBanner";
import WelcomeSnippet from "@/components/WelcomeSnippet";
import DividerSection from "@/components/DividerSection";
import ImageGallery from "@/components/ImageGallery";

export const metadata = {
  title: "About Us | Raqeeb Salt",
  description:
    "Learn about our heritage, our factory, and our commitment to pure Himalayan Pink Salt.",
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "" },
  ];

  // Images specific to the About page gallery
  // Ensure these files exist in public/images/gallery/
  const galleryImages = [
    { src: "/images/gallery/factory-1.jpg", alt: "Processing Facility" },
    { src: "/images/gallery/salt-mine-1.jpg", alt: "Salt Extraction" },
    { src: "/images/gallery/showroom-1.jpg", alt: "Our Showroom" },
    { src: "/images/gallery/packaging-1.jpg", alt: "Quality Packaging" },
    { src: "/images/gallery/worker-1.jpg", alt: "Skilled Craftsmanship" },
    { src: "/images/gallery/stock-1.jpg", alt: "Large Inventory" },
  ];

  const galleryDir = path.join(process.cwd(), "public/images/gallery");
  const files = fs.readdirSync(galleryDir);

  const images = files
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map((file) => ({
      src: `/images/gallery/${file}`,
      alt: file.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
    }));

  return (
    <div>
      <PageBanner
        title="About Raqeeb Salt"
        subtitle="From the heart of the Himalayas to your home. We are dedicated to delivering the purest salt on earth."
        breadcrumbs={breadcrumbs}
        imageUrl="/images/himalayan-salt-bg.jpg"
      />

      {/* Reusing the Welcome Snippet (Maybe customize text via props if supported later) */}
      <WelcomeSnippet showButton={false}/>

      <DividerSection />

      {/* Passing specific images to the Gallery component */}
      {/* Note: If your ImageGallery component imports its own images by default, 
          you might need to update it to accept an 'images' prop. 
          The code below assumes ImageGallery uses its internal default if no prop is passed, 
          or you can update ImageGallery to accept props. */}
      <ImageGallery images={images} />
    </div>
  );
}
