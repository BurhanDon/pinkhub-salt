import HeroSlider from "../components/HeroSlider";
import WelcomeSnippet from "../components/WelcomeSnippet";
import DividerSection from "../components/DividerSection";
import ProductCategories from "../components/ProductCategories"; // Import the new component

export default function Home() {
  return (
    <>
      <HeroSlider />
      <WelcomeSnippet />
      <DividerSection />
      <ProductCategories /> {/* Add the new component here */}
      {/* Placeholder for the next section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          "Why Choose Us" Section
        </h2>
        <p className="text-center">
          This is where the trust-building icons will go.
        </p>
      </div>
    </>
  );
}
