import React from "react";
import PageBanner from "@/components/PageBanner";
import PrivateLabel from "@/components/PrivateLabel";
import CallToAction from "@/components/CallToAction";
import DividerSection from "@/components/DividerSection";

export const metadata = {
  title: "Private Label & OEM Services | Raqeeb Salt",
  description:
    "Launch your own Himalayan Pink Salt brand with Raqeeb Salt’s premium private label and OEM services.",
};

export default function PrivateLabelPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Private Label", href: "" },
  ];

  return (
    <div>
      {/* Page Banner */}
      <PageBanner
        title="Private Label & OEM Services"
        subtitle="Build your own Himalayan Pink Salt brand with custom packaging, branding, and export-ready solutions."
        breadcrumbs={breadcrumbs}
        imageUrl="/images/himalayan-salt-bg.jpg"
      />

      {/* Main Content */}
      <PrivateLabel imagePosition="left" />

      {/* Reusable Sections */}
      <CallToAction />
      <DividerSection />
    </div>
  );
}
