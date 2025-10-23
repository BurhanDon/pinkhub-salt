import React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/private-label", label: "Private Label" },
    { href: "/certifications", label: "Certifications" },
    { href: "/contact", label: "Contact Us" },
    { href: "/faq", label: "FAQ" }, // Added FAQ
  ];

  // We'll replace these with actual categories later
  const productLinks = [
    { href: "/products/edible-salt", label: "Edible Salt" },
    { href: "/products/salt-lamps-decor", label: "Salt Lamps & Decor" },
    { href: "/products/health-wellness", label: "Health & Wellness" },
    { href: "/products/kitchenware", label: "Kitchenware" },
    { href: "/products/animal-lick-salt", label: "Animal Lick Salt" },
    { href: "/products/industrial-salt", label: "Industrial Salt" },
  ];

  const socialLinks = [
    { href: "#", Icon: Facebook, label: "Facebook" },
    { href: "#", Icon: Instagram, label: "Instagram" },
    { href: "#", Icon: Linkedin, label: "LinkedIn" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo & About */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-white">
              Raqeeb<span className="text-primary">Salt</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Leading manufacturer and exporter of premium Himalayan Salt
              products from Pakistan, serving B2B clients globally.
            </p>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-primary text-white p-2 rounded-full transition-colors"
                  aria-label={social.label}
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Our Products
            </h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin
                  size={16}
                  className="mr-2 mt-1 text-primary flex-shrink-0"
                />
                <span>123 Salt Street, Karachi, Pakistan</span>{" "}
                {/* Replace with actual address */}
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-primary flex-shrink-0" />
                <a
                  href="tel:+923000000000"
                  className="hover:text-primary transition-colors"
                >
                  +92 300 0000000
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-primary flex-shrink-0" />
                <a
                  href="mailto:sales@raqeebsalt.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  sales@raqeebsalt.com
                </a>
              </li>
            </ul>
            {/* Optional: Add business hours */}
            {/* <p className="text-sm mt-4">Mon - Fri: 9am - 6pm</p> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Raqeeb Salt. All Rights Reserved.</p>
          {/* Optional: Links to Privacy Policy etc. */}
          {/* <div className="mt-2">
            <Link href="/privacy-policy" className="hover:text-primary mx-2">Privacy Policy</Link> |
            <Link href="/terms-of-service" className="hover:text-primary mx-2">Terms of Service</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
