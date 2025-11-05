"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import allBlogs from "@/data/blogs.json";
import BlogCard from "@/components/BlogCard";
import PageBanner from "@/components/PageBanner";

export default function BlogListPage() {
    const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "" },
  ];
  return (
    <div className="bg-gray-50">
      {/* 1. Banner Section */}
      <PageBanner
        title={"Blogs"}
        subtitle={`Browse our complete collection of ${"Blogs"} products, available for wholesale and private label.`}
        breadcrumbs={breadcrumbs}
        imageUrl="/images/himalayan-salt-bg.jpg"
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
