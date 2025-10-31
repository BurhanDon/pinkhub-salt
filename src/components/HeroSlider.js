// src/components/HeroSlider.js
"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Slider data
const slides = [
  {
    type: "video",
    src: "/videos/hero-video.mp4", // Make sure this video exists in /public/videos/
    title: "Premium Himalayan Salt Exporter",
    subtext:
      "Sourced from the heart of Pakistan for global wholesale & private label.",
    buttonText: "Explore Our Products",
    buttonLink: "/products",
  },
  {
    type: "image",
    src: "/images/himalayan-salt-bg.jpg", // Make sure this image exists in /public/images/
    alt: "Glowing Himalayan salt lamps",
    title: "Authentic Himalayan Salt Lamps & Decor",
    subtext: "Crafted to enhance wellness and ambiance.",
    buttonText: "View Decor Range",
    buttonLink: "/products/home-decor",
  },
  {
    type: "image",
    src: "/images/himalayan-salt-bg.jpg", // Make sure this image exists in /public/images/
    alt: "Edible pink Himalayan salt",
    title: "Pure, Mineral-Rich Edible Salt",
    subtext: "Perfect for culinary excellence and health.",
    buttonText: "See Edible Salts",
    buttonLink: "/products/edible-salt",
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
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full w-full">
            {slide.type === "video" ? (
              <video
                src={slide.src}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover -z-10"
              />
            ) : (
              <img
                src={slide.src}
                alt={slide.alt || slide.title}
                className="absolute inset-0 w-full h-full object-cover -z-10"
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
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
      {/* --- STYLE BLOCK REMOVED to fix hydration error --- */}
    </div>
  );
}
