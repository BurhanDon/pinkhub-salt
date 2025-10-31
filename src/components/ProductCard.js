// src/components/ProductCard.js
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ProductCard({ product }) {
  // --- BUG FIX IS HERE ---
  // We use 'product.category' which exists in your products.json
  // 'product.categoryId' was causing the 'undefined' in the URL
  const productHref = `/products/${product.category}/${product.id}`;
  // --- END BUG FIX ---

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group border border-gray-200 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <Link
        href={productHref}
        className="block relative aspect-square overflow-hidden"
      >
        <Image
          src={product.image || `/images/Category-Card.png`} // Default placeholder
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
          <Link
            href={productHref}
            className="hover:text-primary transition-colors"
          >
            {product.name}
          </Link>
        </h3>
        {/* Render the HTML description from your JSON */}
        <div
          className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
        <Link
          href={productHref}
          className="mt-auto inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          View Details <ArrowRight size={14} className="ml-1" />
        </Link>
      </div>
    </div>
  );
}
