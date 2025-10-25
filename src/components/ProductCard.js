import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ProductCard({ product }) {
  // Construct the link to the single product page
  const productHref = `/products/${product.categoryId}/${product.id}`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group border border-gray-200 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <Link
        href={productHref}
        className="block relative aspect-square overflow-hidden"
      >
        {" "}
        {/* Aspect ratio for consistent image size */}
        <Image
          // src={product.image}
          src={
            product.image ||
            `https://placehold.co/300x300/E6AFA2/FFFFFF?text=Product`
          } // Placeholder
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        {" "}
        {/* Flex grow to push button down */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
          {" "}
          {/* Truncate long names */}
          <Link
            href={productHref}
            className="hover:text-primary transition-colors"
          >
            {product.name}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
          {" "}
          {/* Limit description lines */}
          {product.description}
        </p>
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
