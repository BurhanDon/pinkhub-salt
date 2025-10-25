"use client"; // For framer-motion animations

import React from "react";
import { motion } from "framer-motion";
import { Factory, Award, Tag, Globe } from "lucide-react"; // Icons for features

// Data for the features
const features = [
  {
    Icon: Factory,
    title: "State-of-the-Art Factory",
    description:
      "We control the entire process, from mining to packaging, ensuring quality.",
  },
  {
    Icon: Award,
    title: "Certified Quality",
    description:
      "Adhering to international standards (ISO, HACCP, Halal) for your peace of mind.",
  },
  {
    Icon: Tag,
    title: "Private Label Experts",
    description:
      "Customize packaging and branding with our flexible private label solutions.",
  },
  {
    Icon: Globe,
    title: "Global Exporters",
    description:
      "Reliable and efficient shipping partners to deliver worldwide.",
  },
];

// Animation variants for the section header
const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Staggered animation for the feature items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Each child animates 0.2s after the previous one
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      {" "}
      {/* White background for contrast */}
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
            Quality, Purity, Partnership
          </h2>
          <span className="block w-16 h-1 bg-primary mx-auto mb-4"></span>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why businesses worldwide trust Raqeeb Salt as their
            preferred Himalayan salt supplier.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants} // Use item variant for staggered animation
            >
              <div className="mb-4 inline-block bg-primary/10 p-4 rounded-full">
                {/* Feature Icon */}
                <feature.Icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
