"use client"; // Needed for framer-motion's whileInView

import React from "react";
import Link from "next/link"; // Standard Next.js Link import
import Image from "next/image"; // Standard Next.js Image import
import { motion } from "framer-motion";

const WelcomeSnippet = () => {
  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Column 1: Text Content */}
          <div className="order-2 md:order-1 relative">
            {/* Decorative Top Left Image */}
            <motion.div
              className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none" // Added pointer-events-none
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 0.3, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/about-us-topleft-bg.png" // Replace with your icon path in /public/images/
                alt="" // Decorative image, empty alt is acceptable
                width={80}
                height={80}
                className="w-16 h-16 lg:w-20 lg:h-20"
                aria-hidden="true"
              />
            </motion.div>

            <motion.h2
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3"
            >
              Welcome to Raqeeb Salt
            </motion.h2>

            {/* Small HR */}
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }} // Corresponds to w-16
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="block h-1 bg-primary mb-4"
            ></motion.span>

            <motion.h3
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl lg:text-2xl font-semibold text-gray-700 mb-4"
            >
              Your Trusted Partner in Himalayan Salt
            </motion.h3>

            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-600 leading-relaxed mb-6"
            >
              Raqeeb Salt stands as a premier manufacturer and exporter based in
              Pakistan, dedicated to supplying the finest quality Himalayan salt
              products. We cater to B2B clients, wholesalers, and private label
              brands globally, ensuring authenticity and excellence from mine to
              market.
            </motion.p>

            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Link
                href="/about"
                className="inline-block bg-primary text-white px-7 py-3 rounded-full font-semibold hover:opacity-90 hover:scale-105 hover:brightness-110 transform transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>

          {/* Column 2: Image */}
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Custom Shadow Container */}
            <div className="relative rounded-lg overflow-hidden shadow-[10px_10px_25px_rgba(230,175,162,0.5)] w-[85%] mx-auto">
              {/* Image Container */}
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src="/images/about-us-person.webp"
                  alt="Raqeeb Salt Factory or Himalayan Salt Blocks"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSnippet;
