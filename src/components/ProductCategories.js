// src/components/ProductCategories.js
"use client"; // For framer-motion animations

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Import the NEW data source
import allProducts from "@/data/products.json";
import CategoryCard from "./CategoryCard"; // Import the reusable card

// Helper to extract unique categories from products.json
const getCategoriesFromProducts = (products) => {
  const categoryMap = new Map();
  if (!Array.isArray(products)) {
    return [];
  }
  products.forEach((product) => {
    if (product && product.category) {
      if (!categoryMap.has(product.category)) {
        categoryMap.set(product.category, {
          id: product.category, // "industrial-salt"
          title: product.category // "industrial-salt"
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase()), // "Industrial Salt"
          // Use the image of the *first product* in that category as the category image
          image: product.image || "/images/Category-Card.png",
        });
      }
    }
  });
  // Show the first 6 categories on the home page
  return Array.from(categoryMap.values()).slice(0, 6);
};

// This is the main section component
export default function ProductCategories() {
  const categories = getCategoriesFromProducts(allProducts);

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
            Explore Our Products
          </h2>
          <span className="block w-16 h-1 bg-primary mx-auto mb-4"></span>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From gourmet edible salts to handcrafted decor and wellness
            products, discover the purity of the Himalayas in every category.
          </p>
        </motion.div>

        {/* Categories Grid - Now mapping over data from products.json */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* "View All" Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            href="/products" // Link to the main products page
            className="inline-block bg-primary text-white text-lg px-8 py-3 rounded-full font-semibold hover:opacity-90 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View All Categories
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
