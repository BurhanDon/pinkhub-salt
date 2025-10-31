"use client"; // For framer-motion animations

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import allBlogs from "@/data/blogs.json"; // Import all blogs
import BlogCard from "@/components/BlogCard"; // Reuse the BlogCard component

// Note: We'll add generateMetadata back when we create the dynamic [slug] page
// export async function generateMetadata() { ... }

export default function BlogListPage() {
  return (
    <div className="bg-gray-50">
      {/* 1. Banner Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-t from-gray-100 to-white">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Blog
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Insights, articles, and news from the Himalayan salt industry.
          </motion.p>
          {/* Breadcrumbs */}
          <motion.div
            className="text-sm text-gray-500 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            {" / "}
            <span>Blog</span>
          </motion.div>
        </div>
      </section>

      {/* 2. Blog Posts Grid Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {allBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }} // Stagger animation
                >
                  <BlogCard blog={blog} />
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">No blog posts found.</p>
          )}
        </div>
      </section>
    </div>
  );
}
