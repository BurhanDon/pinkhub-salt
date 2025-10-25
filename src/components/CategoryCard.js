"use client"; // For framer-motion animations

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// This component now receives 'category' and 'index' as props
export default function CategoryCard({ category, index }) {
  // Generate the correct href using the category id
  const categoryHref = `/products/${category.id}`;

  return (
    <motion.div
      className="relative rounded-lg overflow-hidden shadow-lg group transform transition-all duration-300 hover:shadow-2xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={categoryHref} className="block">
        {/* Background Image */}
        <Image
          // src={category.image} // Use image from data
          src={
            category.image ||
            `https://placehold.co/400x400/E6AFA2/FFFFFF?text=${encodeURIComponent(
              category.title
            )}`
          } // Placeholder
          alt={category.title}
          width={400}
          height={400}
          className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110" // Zoom effect
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300"></div>

        {/* Text Content (Hover Effect) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
          <h3 className="text-2xl font-bold text-white mb-2">
            {category.title}
          </h3>
          <span className="flex items-center text-sm font-semibold text-white bg-primary px-4 py-2 rounded-full">
            View Products <ArrowRight size={16} className="ml-2" />
          </span>
        </div>

        {/* Static Title (Visible by default) */}
        <div className="absolute bottom-0 left-0 p-4 transform group-hover:translate-y-8 group-hover:opacity-0 transition-all duration-500 ease-in-out">
          <h3
            className="text-xl font-bold text-white"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
          >
            {category.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}
