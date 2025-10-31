// src/app/products/[categorySlug]/[productSlug]/page.js
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import allProducts from "@/data/products.json";
import { Check, Shield } from "lucide-react";

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

  // Helper for category name
  const categoryName = product.category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="bg-white">
      {/* 1. Breadcrumb Bar */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          {" / "}
          <Link href="/products" className="hover:text-primary">
            Products
          </Link>
          {" / "}
          <Link
            href={`/products/${product.category}`}
            className="hover:text-primary"
          >
            {categoryName}
          </Link>
          {" / "}
          <span className="text-gray-800 font-medium">{product.name}</span>
        </div>
      </div>

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
        </div>
      </section>

      {/* 3. Related Products Section (Placeholder) */}
      <section className="py-16 lg:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Related Products
          </h2>
          <p className="text-center text-gray-600">
            (Product Carousel will go here)
          </p>
        </div>
      </section>
    </div>
  );
}
