"use client"; // For Swiper

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import data and the card component
import { getFeaturedProducts } from "@/data/siteData";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();

  // Animation variants for the section header
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      {" "}
      {/* Matches Category background */}
      <div className="container mx-auto px-4 relative">
        {" "}
        {/* Added relative for positioning context */}
        {/* Section Header */}
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
            Explore a selection of our most popular Himalayan salt products,
            favoured by clients worldwide.
          </p>
        </motion.div>
        {/* Product Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30} // Space between slides
          slidesPerView={1} // Default for mobile
          navigation // Show navigation arrows
          pagination={{ clickable: true }} // Show pagination dots
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // Responsive settings
            640: { slidesPerView: 2 }, // sm
            768: { slidesPerView: 3 }, // md
            1024: { slidesPerView: 4 }, // lg
          }}
          className="pb-16" // Increased padding bottom for pagination dots
        >
          {featuredProducts.map((product) => (
            <SwiperSlide key={product.id} className="h-auto pb-4">
              {" "}
              {/* Ensure slides have height for shadow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }} // Trigger slightly earlier
                className="h-full" // Ensure motion div takes full height
              >
                <ProductCard product={product} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Swiper Styles */}
        <style jsx global>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #e6afa2 !important; /* Use your primary color */
          }
          .swiper-pagination-bullet-active {
            background-color: #e6afa2 !important; /* Use your primary color */
          }
          /* Add margin-top to push pagination down */
          .swiper-pagination {
            bottom: 10px !important; /* Adjust default Swiper bottom value */
            margin-top: 20px !important; /* Add space above dots */
          }
          .swiper-button-next {
            right: 0;
          }
          .swiper-button-prev {
            left: 0;
          }
          @media (max-width: 640px) {
            .swiper-button-next,
            .swiper-button-prev {
              display: none;
            } /* Hide on mobile */
          }
        `}</style>
      </div>
    </section>
  );
}
