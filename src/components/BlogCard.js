import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/**
 * Creates a plain-text excerpt from an HTML string
 * @param {string} html - The HTML string from the blog description
 * @param {number} length - The max length of the excerpt
 * @returns {string} - A plain-text, truncated string
 */
const createExcerpt = (html, length = 150) => {
  if (!html) return "";
  // 1. Remove all HTML tags
  const text = html.replace(/<[^>]+>/g, "");
  // 2. Truncate the text and add ellipsis
  if (text.length > length) {
    return text.substring(0, length) + "...";
  }
  return text;
};

export default function BlogCard({ blog }) {
  // The blog link will be /blog/slug-from-id
  const blogHref = `/blog/${blog.id}`;
  const excerpt = createExcerpt(blog.description);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group border border-gray-200 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      {/* 1. Image */}
      <Link href={blogHref} className="block relative h-56 overflow-hidden">
        <Image
          src={blog.image || "/images/Category-Card.png"} // Use default placeholder
          alt={blog.name}
          width={400}
          height={224}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {/* 2. Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Category/Date (optional) */}
        <span className="text-primary text-sm font-semibold mb-2 uppercase">
          {blog.category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
          <Link
            href={blogHref}
            className="hover:text-primary transition-colors"
          >
            {blog.name}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
          {excerpt}
        </p>

        {/* Read More Button */}
        <Link
          href={blogHref}
          className="mt-auto inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          Read More <ArrowRight size={14} className="ml-1" />
        </Link>
      </div>
    </div>
  );
}
