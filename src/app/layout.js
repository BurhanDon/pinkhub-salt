import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer"; // Import the Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raqeeb Himalayan Salt - Manufacturer & Exporter",
  description: "Premium Himalayan Pink Salt products for B2B and wholesale.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white text-gray-800 flex flex-col min-h-screen`}
      >
        {" "}
        {/* Added flex classes */}
        <Header />
        {/* Added flex-grow to make main content fill space */}
        <main className="flex-grow">{children}</main>
        <Footer /> {/* Add the Footer component here */}
      </body>
    </html>
  );
}
