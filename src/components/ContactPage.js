"use client"; // This must be a client component to handle form state and submission

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Loader,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

export default function ContactPage() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // State to manage submission status (idle, loading, success, error)
  const [status, setStatus] = useState("idle");

  /**
   * Handle input changes and update state
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Handle form submission for Netlify Forms
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default page reload
    setStatus("loading");

    // Netlify requires form data to be in 'application/x-www-form-urlencoded' format
    const body = new URLSearchParams({
      "form-name": "contact", // This 'form-name' must match the form's 'name' attribute
      ...formData,
    }).toString();

    try {
      // POST to the *same page* ('/') or the page path ('/contact')
      // Netlify will intercept this POST request
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (response.ok) {
        setStatus("success");
        // Clear the form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        // Handle server-side errors from Netlify
        setStatus("error");
      }
    } catch (error) {
      // Handle network errors
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="bg-white">
      {/* 1. Page Banner */}

      {/* 2. Main Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Column 1: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you have a question about our products, need a wholesale
                quote, or want to discuss private labeling, our team is ready to
                answer all your questions.
              </p>

              <div className="space-y-6">
                <a href="tel:+923000000000" className="flex items-start group">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">
                      Call Us
                    </h3>
                    <p className="text-gray-600">+92 318 2677471</p>
                  </div>
                </a>
                <a
                  href="mailto:bu61796@gmail.com"
                  className="flex items-start group"
                >
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">
                      Email Us
                    </h3>
                    <p className="text-gray-600">bu61796@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Our Location
                    </h3>
                    <p className="text-gray-600">
                      123 Salt Street, Karachi, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Column 2: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/*
                This form is configured for Netlify Forms.
                1. `data-netlify="true"` tells Netlify to watch this form.
                2. `name="contact"` is the name that will appear in your Netlify dashboard.
                3. The hidden input `form-name` MUST match the form `name`.
                4. Every field (`name`, `email`, `message`, etc.) MUST have a `name` attribute.
              */}
              <form
                name="contact"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-lg"
              >
                {/* Hidden input for Netlify to identify the form */}
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  {/* Phone (Optional) */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone <span className="text-xs">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex justify-center items-center bg-primary text-white text-lg px-8 py-3 rounded-full font-semibold hover:opacity-90 transform transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" && (
                      <Loader className="h-5 w-5 mr-2 animate-spin" />
                    )}
                    {status === "idle" && "Send Message"}
                    {status === "loading" && "Sending..."}
                    {status === "success" && "Message Sent!"}
                    {status === "error" && "Try Again"}
                  </button>
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <div className="mt-4 flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <p>Thank you! Your message has been sent successfully.</p>
                  </div>
                )}
                {status === "error" && (
                  <div className="mt-4 flex items-center text-red-600">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    <p>Something went wrong. Please try again later.</p>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
