"use client"; // This component uses client-side hooks and libraries

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Slider data (replace with your actual images/videos later)
const slides = [
  {
    type: "video", // Or 'image'
    // You MUST host video files publicly (e.g., S3, Cloudinary, or even just in your /public folder)
    // src: '/videos/salt-processing.mp4', // Example path in public folder
    src: "/videos/hero-video.mp4", // Placeholder video
    title: "Premium Himalayan Salt Exporter",
    subtext:
      "Sourced from the heart of Pakistan for global wholesale & private label.",
    buttonText: "Explore Our Products",
    buttonLink: "/products",
  },
  {
    type: "image",
    src: "/images/himalayan-salt-bg.jpg", // Placeholder Image
    alt: "Glowing Himalayan salt lamps",
    title: "Authentic Himalayan Salt Lamps & Decor",
    subtext: "Crafted to enhance wellness and ambiance.",
    buttonText: "View Decor Range",
    buttonLink: "/products/salt-lamps-decor", // Example category link
  },
  {
    type: "image",
    src: "images/himalayan-salt-bg.jpg", // Placeholder Image
    alt: "Edible pink Himalayan salt",
    title: "Pure, Mineral-Rich Edible Salt",
    subtext: "Perfect for culinary excellence and health.",
    buttonText: "See Edible Salts",
    buttonLink: "/products/edible-salt", // Example category link
  },
];

export default function HeroSlider() {
  return (
    <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000, // Change slide every 5 seconds
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true} // Shows Previous/Next arrows
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full w-full">
            {/* Background Image/Video */}
            {slide.type === "video" ? (
              <video
                src={slide.src}
                autoPlay
                muted
                loop
                playsInline // Important for mobile playback
                className="absolute inset-0 w-full h-full object-cover -z-10"
              />
            ) : (
              <img
                src={slide.src}
                alt={slide.alt || slide.title}
                className="absolute inset-0 w-full h-full object-cover -z-10"
              />
            )}
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white p-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 animate__animated animate__fadeInDown">
                {slide.title}
              </h1>
              <p className="text-md md:text-xl lg:text-2xl mb-8 max-w-2xl animate__animated animate__fadeInUp">
                {slide.subtext}
              </p>
              <Link
                href={slide.buttonLink}
                className="bg-primary text-white px-6 py-3 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity animate__animated animate__fadeInUp animate__delay-1s"
              >
                {slide.buttonText}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Swiper Styles (Optional: Add to globals.css if needed) */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #e6afa2 !important; /* Use your primary color */
        }
        .swiper-pagination-bullet-active {
          background-color: #e6afa2 !important; /* Use your primary color */
        }
        /* Ensure video plays behind text */
        video {
          z-index: -1;
        }
      `}</style>
    </div>
  );
}
