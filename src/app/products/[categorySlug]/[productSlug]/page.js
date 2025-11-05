// src/app/products/[categorySlug]/[productSlug]/page.js
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import allProducts from "@/data/products.json";
import { Check, Shield } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import FeaturedProducts from "@/components/FeaturedProducts";
import DividerSection from "@/components/DividerSection";
import ProductCategories from "@/components/ProductCategories";
import CallToAction from "@/components/CallToAction";

// This function tells Next.js to pre-build all product pages
export async function generateStaticParams() {
  return allProducts.map((product) => ({
    categorySlug: product.category,
    productSlug: product.id.toString(), // Ensure ID is a string to match URL slug
  }));
}

// This function finds the correct product from the JSON
const getProduct = async (params) => {
  const { categorySlug, productSlug } = await params;
  const product = allProducts.find(
    (p) => p.category === categorySlug && p.id.toString() === productSlug
  );
  return product;
};

// This function generates the dynamic SEO for each product
export async function generateMetadata({ params }) {
  const product = await getProduct(params);
  if (!product) {
    return { title: "Product Not Found" };
  }
  return {
    title: `${product.name} | Raqeeb Salt`,
    description: product.description
      .substring(0, 160)
      .replace(/<[^>]*>?/gm, ""),
  };
}

// --- The Page Component ---
export default async function ProductPage({ params }) {
  const product = await getProduct(params);

  if (!product) {
    notFound();
  }

  // Get category and index in allProducts
  const categoryProducts = allProducts.filter(
    (p) => p.category === product.category
  );
  const currentIndex = categoryProducts.findIndex((p) => p.id === product.id);

  const prevProduct =
    currentIndex > 0 ? categoryProducts[currentIndex - 1] : null;
  const nextProduct =
    currentIndex < categoryProducts.length - 1
      ? categoryProducts[currentIndex + 1]
      : null;

  // Helper for category name
  const categoryName = product.category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: categoryName, href: "" }, // Current page, no link
  ];

  return (
    <div className="bg-white">
      {/* 1. Banner Section */}
      <PageBanner
        title={categoryName}
        subtitle={`Browse our complete collection of ${categoryName} products, available for wholesale and private label.`}
        breadcrumbs={breadcrumbs}
        imageUrl="/images/himalayan-salt-bg.jpg"
      />

      {/* 2. Main Product Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Image Column */}
            <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 shadow-md">
              <Image
                src={product.image || "/images/Category-Card.png"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Details Column */}
            <div>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase">
                {categoryName}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                {product.name}
              </h1>

              {/* Render the cleaned HTML description */}
              <div
                className="prose prose-p:text-gray-600 prose-strong:text-gray-700"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />

              {/* Quality Badges */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center text-gray-700">
                  <Check
                    size={18}
                    className="text-green-500 mr-2 flex-shrink-0"
                  />
                  <span>100% Authentic Himalayan Salt</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Shield
                    size={18}
                    className="text-blue-500 mr-2 flex-shrink-0"
                  />
                  <span>ISO, HACCP, Halal Certified Facility</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block bg-primary text-white text-lg px-10 py-3 rounded-full font-semibold hover:opacity-90 hover:scale-105 transform transition-all duration-300 shadow-md"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>

          {/* 🔹 Product Navigation Arrows */}
          <div className="flex justify-between items-center mt-12 border-t border-gray-200 pt-6 text-gray-700">
  {prevProduct ? (
    <Link
      href={`/products/${prevProduct.category}/${prevProduct.id}`}
      scroll={false}   // 👈 Prevents jumping to top
      className="flex items-center text-primary hover:underline"
    >
      <span className="mr-2">←</span> {prevProduct.name}
    </Link>
  ) : (
    <span />
  )}

  {nextProduct ? (
    <Link
      href={`/products/${nextProduct.category}/${nextProduct.id}`}
      scroll={false}   // 👈 Prevents jumping to top
      className="flex items-center text-primary hover:underline"
    >
      {nextProduct.name} <span className="ml-2">→</span>
    </Link>
  ) : (
    <span />
  )}
</div>

        </div>
      </section>

      {/* <DividerSection /> */}
      {/* <FeaturedProducts /> */}
      {/* <CallToAction/> */}
    </div>
  );
}
