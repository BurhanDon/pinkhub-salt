// src/app/products/[categorySlug]/page.js
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import allProducts from "@/data/products.json";
import ProductCard from "@/components/ProductCard"; // We'll reuse the card from the FeaturedProducts section
import DividerSection from "@/components/DividerSection";
import CallToAction from "@/components/CallToAction";

// Helper function to get all unique category slugs for building pages
const getAllCategorySlugs = () => {
  const slugs = new Set(allProducts.map((p) => p.category));
  return Array.from(slugs);
};

// Helper function to get a formatted category name from a slug
const getCategoryName = (slug) => {
  if (!slug) return "Category";
  return slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()); // "edible-salt" -> "Edible Salt"
};

// **1. Generate Static Pages**
// This function tells Next.js which category pages to pre-build
export async function generateStaticParams() {
  const categorySlugs = getAllCategorySlugs();

  return categorySlugs.map((slug) => ({
    categorySlug: slug, // The key matches the folder name '[categorySlug]'
  }));
}

// **2. Generate Dynamic SEO Metadata**
// This function generates the title and description for each specific category page
export async function generateMetadata({ params }) {
  const { categorySlug } = await params;
  const categoryName = getCategoryName(categorySlug);

  // Check if category actually exists
  const productsInCategory = allProducts.filter(
    (product) => product.category === categorySlug
  );
  if (productsInCategory.length === 0) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${categoryName} | Raqeeb Salt Products`,
    description: `Explore Raqeeb Salt's premium ${categoryName} products. Wholesale and private label available.`,
  };
}

// 2. Define breadcrumbs for the banner

// **3. The Page Component**
export default async function CategoryPage({ params }) {
  const { categorySlug } = await params; // Get the current category slug from the URL

  console.log("URL slug:", categorySlug);

  // Filter products belonging to this category
  const productsInCategory = allProducts.filter(
    (product) => product.category === categorySlug
  );

  const categoryName = getCategoryName(categorySlug);
  console.log("Products filtered:", productsInCategory);
  // If no products match this slug, show a 404 page
  if (productsInCategory.length === 0) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: categoryName, href: "" }, // Current page, no link
  ];

  return (
    <div>
      {/* 1. Banner Section */}
      <PageBanner
        title={categoryName}
        subtitle={`Browse our complete collection of ${categoryName} products, available for wholesale and private label.`}
        breadcrumbs={breadcrumbs}
        imageUrl="/images/himalayan-salt-bg.jpg"
      />

      {/* 2. Products Grid Section */}
      <section className="py-16 lg:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {productsInCategory.map((product) => (
              <div key={product.id}>
                {/* Reuse the ProductCard component */}
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <DividerSection />
      <CallToAction />
    </div>
  );
}
