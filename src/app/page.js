import HeroSlider from "../components/HeroSlider";
import WelcomeSnippet from "../components/WelcomeSnippet"; // Import Welcome Snippet
import DividerSection from "../components/DividerSection"; // Import Divider

export default function Home() {
  return (
    <>
      <HeroSlider />
      <WelcomeSnippet /> {/* Add Welcome Snippet here */}
      <DividerSection /> {/* Add Divider Section here */}
      {/* Placeholder for the next section (Product Categories) */}
      <div className="container mx-auto px-4 py-16 bg-gray-50">
        {" "}
        {/* Added bg-gray-50 for contrast */}
        <h2 className="text-3xl font-bold mb-8 text-center">
          Product Categories Section
        </h2>
        <p className="text-center">This is where the category grid will go.</p>
      </div>
    </>
  );
}
