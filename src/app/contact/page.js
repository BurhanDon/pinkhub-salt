import React from "react";
import PageBanner from "@/components/PageBanner";
import ContactUs from "@/components/ContactUs";

export const metadata = {
  title: "Contact Us | Raqeeb Salt",
  description:
    "Get in touch with Raqeeb Salt for wholesale inquiries, private labeling, and more.",
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Contact Us", href: "" },
  ];

  return (
    <div>
      <PageBanner
        title="Contact Us"
        subtitle="We're here to help. Send us a message for wholesale quotes, private labeling, or general inquiries."
        breadcrumbs={breadcrumbs}
        imageUrl="/images/himalayan-salt-bg.jpg"
      />

      <ContactUs />
    </div>
  );
}
