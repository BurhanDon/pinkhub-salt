'use client'; // For framer-motion animations

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * A reusable banner for the top of inner pages.
 * @param {object} props
 * @param {string} props.title - The main title for the banner.
 * @param {string} [props.subtitle] - An optional short description.
 * @param {Array<{href: string, name: string}>} [props.breadcrumbs] - Array of breadcrumb links.
 * @param {string} [props.imageUrl] - Optional background image URL.
 */
export default function PageBanner({ title, subtitle, breadcrumbs, imageUrl }) {
  // Use provided image or a default placeholder
  const bgImage = imageUrl || 'https://placehold.co/1920x400/cccccc/999999?text=Default+Banner';

  return (
    <section className="relative py-24 md:py-32 text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt={title || 'Page Banner Background'}
        layout="fill"
        objectFit="cover"
        quality={75}
        className="absolute inset-0 z-0"
        priority // Load banner images early
      />
      
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title || 'Page Title'}
        </motion.h1>

        {/* Title Underline */}
        <motion.span
          className="block w-20 h-1 bg-primary mx-auto" // The requested underline
          initial={{ width: 0 }}
          animate={{ width: '5rem' }} // 5rem = 80px (w-20)
          transition={{ duration: 0.6, delay: 0.2 }}
        ></motion.span>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            className="text-lg text-gray-200 max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.div
            className="text-sm text-gray-300 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {breadcrumbs.map((crumb, index) => (
              <span key={index}>
                {index > 0 && <span className="mx-2">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-primary transition-colors">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-white font-medium">{crumb.name}</span>
                )}
              </span>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}