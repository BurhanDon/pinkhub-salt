"use client";

import { motion } from "framer-motion";
import CategoryCard from "@/components/CategoryCard";

export default function CategoriesSection({ categories }) {
  return (
    <div>
      {/* Banner */}
      <section className="relative py-24 md:py-32 bg-gradient-to-t from-gray-100 to-white">
        <div className="container mx-auto px-4 text-center">
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
            Discover the diverse range of premium Himalayan salt products.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 lg:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          {categories?.length ? (
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
