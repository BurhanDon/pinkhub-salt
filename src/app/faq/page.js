import React from "react";
import PageBanner from "@/components/PageBanner";
import FAQSection from "@/components/FAQSection";
import ContactPage from "@/components/ContactUs";
import DividerSection from "@/components/DividerSection";

export const metadata = {
  title: "FAQ | Raqeeb Salt",
  description:
    "Common questions about shipping, wholesale orders, private labeling, and payment methods.",
};

export default function FAQPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "FAQ", href: "" },
  ];

  const commonQuestions = [
    {
      question: "What is your Minimum Order Quantity (MOQ)?",
      answer:
        "For wholesale orders, our MOQ typically starts at 500kg or one pallet, depending on the product type. For private label projects, we recommend a minimum of 1000 units to ensure cost-effectiveness for packaging customization.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship globally. We handle all logistics, including freight booking and export documentation. We can ship FCL (Full Container Load) or LCL (Less than Container Load) to any major port worldwide.",
    },
    {
      question: "Can I get samples before placing a bulk order?",
      answer:
        "Absolutely. We encourage clients to test our quality. We offer sample kits. While the samples are often free, the client is responsible for covering the courier/shipping charges.",
    },
    {
      question: "What certifications does your salt have?",
      answer:
        "Our Himalayan Salt is processed in ISO 9001:2015 and HACCP certified facilities. We also provide Certificate of Analysis (COA) and Origin Certificates with every shipment to guarantee purity and authenticity.",
    },
    {
      question: "Do you provide Private Label / OEM services?",
      answer:
        "Yes, this is our specialty. We can customize packaging (pouches, grinders, jars, boxes) with your brand's logo and design. Our design team can also assist in creating the artwork if needed.",
    },
    {
      question: "What are your payment terms?",
      answer:
        "For international orders, we typically require a 50% advance deposit via T/T (Bank Transfer) to start production, with the remaining balance due against the copy of the Bill of Lading (B/L). LC (Letter of Credit) is available for large container orders.",
    },
    {
      question: "How long does production take?",
      answer:
        "Standard production time is 15-20 days for a 20ft container. Custom packaging or private label orders may take slightly longer (25-30 days) depending on the complexity of the packaging design.",
    },
  ];

  return (
    <div>
      <PageBanner
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about our products, shipping, and wholesale processes."
        breadcrumbs={breadcrumbs}
        imageUrl="/images/himalayan-salt-bg.jpg"
      />

      <FAQSection faqs={commonQuestions} />
      <DividerSection />

      {/* Adding a CTA section at the bottom in case their question wasn't answered */}
      <div className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-1">
            Can't find the answer you're looking for? Please contact our
            friendly team.
          </p>
        </div>
        <ContactPage />
      </div>
    </div>
  );
}
