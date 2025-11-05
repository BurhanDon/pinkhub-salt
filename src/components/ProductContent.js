"use client"; // Client component because we use state/hooks

import React from "react";
import ProductDetails from "./ProductDetails";
import Link from "next/link";

export default function ProductContent({ product, prevProduct, nextProduct }) {
  return (
    <>
      {/* Product Section */}
      <ProductDetails product={product} />

      {/* Navigation Arrows */}
      <div className="flex justify-between container mx-auto px-4 py-6">
        {prevProduct ? (
          <Link
            href={`/products/${prevProduct.category}/${prevProduct.id}`}
            scroll={false} // preserve scroll
            className="text-primary font-semibold hover:underline"
          >
            ← {prevProduct.name}
          </Link>
        ) : <div />}
        {nextProduct ? (
          <Link
            href={`/products/${nextProduct.category}/${nextProduct.id}`}
            scroll={false}
            className="text-primary font-semibold hover:underline"
          >
            {nextProduct.name} →
          </Link>
        ) : <div />}
      </div>
    </>
  );
}
