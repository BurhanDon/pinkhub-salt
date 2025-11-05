"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Shield } from "lucide-react";
import PageBanner from "./PageBanner";

export default function ProductDetails({ product }) {
  if (!product) return null;

  const categoryName = product.category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: categoryName, href: "" },
  ];

  return (
    <>
      {/* Banner Section */}
      <PageBanner
        title={categoryName}
        subtitle={`Browse our complete collection of ${categoryName} products.`}
        breadcrumbs={breadcrumbs}
        imageUrl={product.image || "/images/himalayan-salt-bg.jpg"}
      />

      {/* Product Details */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 shadow-md">
              <Image
                src={product.image || "/images/Category-Card.png"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Details */}
            <div>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase">
                {categoryName}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                {product.name}
              </h1>

              <div
                className="prose prose-p:text-gray-600 prose-strong:text-gray-700"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />

              {/* Quality Badges */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center text-gray-700">
                  <Check size={18} className="text-green-500 mr-2 flex-shrink-0" />
                  <span>100% Authentic Himalayan Salt</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Shield size={18} className="text-blue-500 mr-2 flex-shrink-0" />
                  <span>ISO, HACCP, Halal Certified Facility</span>
                </div>
              </div>

              {/* CTA */}
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
    </>
  );
}
