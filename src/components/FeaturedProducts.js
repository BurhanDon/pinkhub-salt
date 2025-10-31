// src/components/FeaturedProducts.js
"use client"; // For Swiper

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// --- DATA SOURCE FIX ---
// Import directly from products.json and filter here
import allProducts from "@/data/products.json";
import ProductCard from "./ProductCard";

// Helper function to get ONLY featured products
// You can customize this logic (e.g., take first 10, or add a "featured" flag to your JSON)
const getFeaturedProducts = () => {
  // For now, let's just show the first 10 products.
  // We can add a "featured: true" flag to products.json later if you want.
  return allProducts.slice(0, 10);
};
// --- END DATA SOURCE FIX ---

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
            Our Best-Sellers
          </h2>
          <span className="block w-16 h-1 bg-primary mx-auto mb-4"></span>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore a selection of our most popular Himalayan salt products.
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-16" // Increased padding for dots
        >
          {featuredProducts.map((product) => (
            <SwiperSlide key={product.id} className="h-auto pb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className="h-full"
              >
                <ProductCard product={product} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* --- STYLE BLOCK REMOVED to fix hydration error --- */}
      </div>
    </section>
  );
}
