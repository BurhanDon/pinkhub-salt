// src/app/page.js (Temporary Test Code)
import HeroSlider from "../components/HeroSlider";
import WelcomeSnippet from "../components/WelcomeSnippet";
import DividerSection from "../components/DividerSection";
import ProductCategories from "../components/ProductCategories";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturedProducts from "../components/FeaturedProducts";
import CallToAction from "../components/CallToAction"; // Import the CTA component
import productsData from "@/data/products.json";
import blogsData from "@/data/blogs.json";

export default function Home() {
  // --- TEST START ---
  // Log counts to the server console (visible in your terminal)
  console.log(
    `Found ${Array.isArray(productsData) ? productsData.length : 0} products.`
  );
  console.log(
    `Found ${Array.isArray(blogsData) ? blogsData.length : 0} blogs.`
  );
  // --- TEST END ---

  return (
    <>
      {/* --- TEST START --- */}
      {/* Add a visual display on the page */}
      <div className="bg-yellow-100 p-4 text-center text-black font-mono">
        <h2 className="font-bold text-lg mb-2">Data Loading Test:</h2>
        <p>
          Products loaded:{" "}
          {Array.isArray(productsData) ? productsData.length : "Error"}
        </p>
        <p>
          Blogs loaded: {Array.isArray(blogsData) ? blogsData.length : "Error"}
        </p>
        <p>(Check terminal console for logs)</p>
      </div>
      {/* --- TEST END --- */}
      <HeroSlider />
      <WelcomeSnippet />
      <DividerSection />
      <ProductCategories />
      <WhyChooseUs />
      <FeaturedProducts />
      <CallToAction /> {/* Add the CTA component here */}
      <DividerSection />
      {/* Home page sections are complete! */}
    </>
  );
}
