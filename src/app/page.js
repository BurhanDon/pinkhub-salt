// src/app/page.js
import HeroSlider from "../components/HeroSlider";
import WelcomeSnippet from "../components/WelcomeSnippet";
import DividerSection from "../components/DividerSection";
import ProductCategories from "../components/ProductCategories";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturedProducts from "../components/FeaturedProducts";
import CallToAction from "../components/CallToAction";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <WelcomeSnippet />
      <DividerSection />
      <ProductCategories />
      <WhyChooseUs />
      <FeaturedProducts />
      <CallToAction />
      <BlogSection />
      {/* Home page sections are complete! */}
    </>
  );
}
