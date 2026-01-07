"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Loader,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // 1. URLSearchParams automatically encodes the data correctly
      const data = new URLSearchParams();
      data.append("form-name", "contact"); // MUST match the name in public/form.html

      // Append all state fields
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      // 2. Submit to the root "/"
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        console.error("Netlify Server Error:", response);
        setStatus("error");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center h-full"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contact Testing
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you have a question about our products, need a wholesale
              quote, or want to discuss private labeling, our team is ready to
              answer all your questions.
            </p>

            <div className="space-y-6">
              <a
                href="https://wa.me/923000000000"
                className="flex items-start group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">
                    Call Us
                  </h3>
                  <p className="text-gray-600">+92 300 0000000</p>
                </div>
              </a>

              <a
                href="mailto:sales@raqeebsalt.com"
                className="flex items-start group"
              >
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">
                    Email Us
                  </h3>
                  <p className="text-gray-600">sales@raqeebsalt.com</p>
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

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <form
              name="contact"
              method="post"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-lg"
            >
              {/* Note: We do NOT need hidden inputs here because we append "form-name" in the JS handler */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex justify-center items-center bg-primary text-white text-lg px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
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

              {status === "success" && (
                <div className="mt-4 flex items-center text-green-600 bg-green-50 p-3 rounded">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <p>Thank you! Your message has been sent.</p>
                </div>
              )}
              {status === "error" && (
                <div className="mt-4 flex items-center text-red-600 bg-red-50 p-3 rounded">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  <p>Something went wrong. Please refresh and try again.</p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
