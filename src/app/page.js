// src/app/page.js
import fs from "fs";
import path from "path";
import HeroSlider from "../components/HeroSlider";
import WelcomeSnippet from "../components/WelcomeSnippet";
import DividerSection from "../components/DividerSection";
import ProductCategories from "../components/ProductCategories";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturedProducts from "../components/FeaturedProducts";
import CallToAction from "../components/CallToAction";
import BlogSection from "@/components/BlogSection";
import ImageGallery from "@/components/ImageGallery";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactPage from "@/components/ContactUs";
import PrivateLabel from "@/components/PrivateLabel";

export default function Home() {
  // 🔹 Read files in /public/images/gallery
  const galleryDir = path.join(process.cwd(), "public/images/gallery");
  const files = fs.readdirSync(galleryDir);

  const images = files
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map((file) => ({
      src: `/images/gallery/${file}`,
      alt: file.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
    }));
  return (
    <>
      <HeroSlider />
      <WelcomeSnippet showButton={true}/>
      <DividerSection />
      <ImageGallery images={images} />
      <ProductCategories />
      <DividerSection />
      <WhyChooseUs />
      <FeaturedProducts />
      <PrivateLabel imagePosition="left" /> {/* Or "right" */}
      <DividerSection />
      <CallToAction />
      <BlogSection />
      <ContactPage />
      <DividerSection />
      <WhatsAppButton />
      {/* Home page sections are complete! */}
    </>
  );
}
