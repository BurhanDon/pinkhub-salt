// src/app/products/page.js
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Import category data (we need category info, not individual products here)
// Assuming your python script outputted categories separately or we extract them.
// Let's modify the import logic slightly to simulate having just category data.
// We'll import products.json and derive categories from it for now.
// Ideally, siteData.js would export categories separately.
import allProducts from "@/data/products.json"; // Import the products data
import CategoryCard from "@/components/CategoryCard"; // Reuse the card component

// Helper to extract unique categories from products.json
// In a real scenario, you'd likely have a separate categories.json or structure siteData.js better
const getCategoriesFromProducts = (products) => {
  const categoryMap = new Map();
  // Ensure products is an array before iterating
  if (!Array.isArray(products)) {
    console.error("Error: products.json did not load as an array.");
    return []; // Return empty array if data is invalid
  }
  products.forEach((product) => {
    // Basic check for product structure
    if (product && product.category) {
      if (!categoryMap.has(product.category)) {
        categoryMap.set(product.category, {
          id: product.category, // Use the category slug as id
          title: product.category
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase()), // Basic title generation
          description: `Explore our range of ${product.category.replace(
            /-/g,
            " "
          )} products.`,
          image: `/images/Category-Card.png`, // Default placeholder
        });
      }
    } else {
      console.warn("Skipping invalid product structure:", product);
    }
  });
  return Array.from(categoryMap.values());
};

// Metadata for SEO
export async function generateMetadata() {
  return {
    title: "Our Product Categories | Raqeeb Salt",
    description:
      "Explore all product categories offered by Raqeeb Salt, including edible salt, salt lamps, wellness products, and more.",
  };
}

export default function ProductsPage() {
  const categories = getCategoriesFromProducts(allProducts);

  return (
    <div>
      {/* 1. Banner Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-t from-gray-100 to-white">
        <div className="container mx.auto px-4 relative z-10 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Product Categories
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover the diverse range of premium Himalayan salt products
            offered by Raqeeb Salt.
          </motion.p>
        </div>
      </section>

      {/* 2. Categories Grid Section */}
      <section className="py-16 lg:py-24 bg-gray-100">
        {" "}
        {/* Consistent background */}
        <div className="container mx-auto px-4">
          {/* Categories Grid - Reusing the CategoryCard */}
          {categories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">
              Could not load product categories. Please check data file.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
