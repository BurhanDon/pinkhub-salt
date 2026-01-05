"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

/**
 * Reusable Private Label Section
 * @param {string} imagePosition - 'left' or 'right' (default: 'left')
 */
export default function PrivateLabel({ imagePosition = "left" }) {
  // Logic to swap order on desktop.
  // On mobile, image will always be top (order-1) or bottom depending on preference.
  // Here we assume standard stacking: Image top on mobile.
  const isImageRight = imagePosition === "right";

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Column */}
          <motion.div
            className={`w-full lg:w-1/2 relative ${
              isImageRight ? "lg:order-2" : "lg:order-1"
            }`}
            initial={{ opacity: 0, x: isImageRight ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100">
              <Image
                src="/images/private-label.webp"
                alt="Raqeeb Salt Private Label Packaging"
                width={800}
                height={600}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />

              {/* Optional: Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs hidden sm:block">
                <p className="font-bold text-gray-800 text-sm">
                  Custom Branding
                </p>
                <p className="text-xs text-gray-500">
                  Your Logo, Your Packaging, Our Premium Salt.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            className={`w-full lg:w-1/2 ${
              isImageRight ? "lg:order-1" : "lg:order-2"
            }`}
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">
              Grow Your Brand
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Premium Private Label & OEM Services
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Launch your own line of Himalayan Pink Salt products with ease. We
              offer comprehensive private labeling services, handling everything
              from sourcing and processing to custom packaging design.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {[
                "Custom Packaging Solutions (Jars, Pouches, Grinders)",
                "Logo & Brand Design Assistance",
                "Wide Range of Grain Sizes & Colors",
                "Export-Ready Certification & Documentation",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mr-3" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gray-900 text-white text-lg px-8 py-4 rounded-full font-semibold hover:bg-primary transition-colors duration-300 shadow-lg group"
            >
              Start Your Brand
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
