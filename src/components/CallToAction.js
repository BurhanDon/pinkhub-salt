"use client"; // For framer-motion

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gray-800 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/Category-Card.png" // Using the specified placeholder
        // src="/images/cta-background-salt-texture.jpg" // Replace with your actual texture image later
        alt="Himalayan Salt Texture Background"
        layout="fill"
        objectFit="cover"
        quality={75}
        className="absolute inset-0 z-0 opacity-20" // Low opacity
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Looking for a Reliable B2B Supplier?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Partner with Raqeeb Salt for premium quality, consistent supply, and
          dedicated B2B services including private labeling.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact" // Link to the contact page
            className="inline-block bg-primary text-white text-lg px-8 py-3 rounded-full font-semibold hover:opacity-90 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Your Wholesale Quote Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
