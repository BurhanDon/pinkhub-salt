"use client";

import { motion } from "framer-motion";
import CategoryCard from "@/components/CategoryCard";
import FeaturedProducts from "@/components/FeaturedProducts";
import DividerSection from "@/components/DividerSection";
import PageBanner from "@/components/PageBanner";
import CallToAction from "@/components/CallToAction";

export default function CategoriesSection({ categories, categoryName }) {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Products", href: "" },
  ];

  return (
    <div>
      {/* Banner */}
      <PageBanner
        title="Our Product Categories"
        subtitle="Browse our complete collection of Himalayan salt products, available for wholesale and private label."
        breadcrumbs={breadcrumbs}
        imageUrl="/images/himalayan-salt-bg.jpg"
      />

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
      <DividerSection />

      <FeaturedProducts />
      <CallToAction />
    </div>
  );
}
