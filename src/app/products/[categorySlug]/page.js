// // src/app/products/[categorySlug]/page.js
// import React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";

// import allProducts from "@/data/products.json"; // Import all products
// import ProductCard from "@/components/ProductCard"; // Reuse the product card

// // Helper function to get unique category slugs for generating pages
// const getAllCategorySlugs = () => {
//   const slugs = new Set(allProducts.map((p) => p.category));
//   return Array.from(slugs);
// };

// // Helper function to get category details (name) based on slug
// // Ideally, this data would come from a dedicated categories data source
// const getCategoryDetails = (slug) => {
//   // Attempt to find a product in this category to get a better name, or default
//   const productInCategory = allProducts.find((p) => p.category === slug);
//   const title = slug
//     .replace(/-/g, " ")
//     .replace(/\b\w/g, (l) => l.toUpperCase()); // Basic title generation
//   // Placeholder description - replace with real descriptions if available
//   const description = `Browse our collection of ${title} products.`;
//   return { title, description };
// };

// // **1. Generate Static Paths**
// // This function tells Next.js which category pages to pre-build
// export async function generateStaticParams() {
//   const categorySlugs = getAllCategorySlugs();
//   return categorySlugs.map((slug) => ({
//     categorySlug: slug, // The key matches the folder name '[categorySlug]'
//   }));
// }

// // **2. Generate Metadata (SEO)**
// // This function generates the title and description for each specific category page
// export async function generateMetadata({ params }) {
//   const { categorySlug } = params;
//   const { title } = getCategoryDetails(categorySlug);
//   return {
//     title: `${title} | Raqeeb Salt Products`,
//     description: `Explore Raqeeb Salt's premium ${title} products, including ${title.toLowerCase()}.`,
//   };
// }

// // **3. The Page Component**
// export default function CategoryPage({ params }) {
//   const { categorySlug } = params; // Get the current category slug from the URL

//   // Filter products belonging to this category
//   const productsInCategory = allProducts.filter(
//     (product) => product.category === categorySlug
//   );
//   const categoryDetails = getCategoryDetails(categorySlug);

//   return (
//     <div>
//       {/* 1. Banner Section */}
//       <section className="relative py-20 md:py-28 bg-gradient-to-t from-gray-100 to-white">
//         <div className="container mx-auto px-4 relative z-10 text-center">
//           <motion.h1
//             className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             {categoryDetails.title} {/* Display dynamic category title */}
//           </motion.h1>
//           <motion.p
//             className="text-lg text-gray-600 max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             {categoryDetails.description}{" "}
//             {/* Display dynamic category description */}
//           </motion.p>
//           {/* Optional Breadcrumbs */}
//           <motion.div
//             className="text-sm text-gray-500 mt-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <Link href="/" className="hover:text-primary">
//               Home
//             </Link>
//             {" / "}
//             <Link href="/products" className="hover:text-primary">
//               Products
//             </Link>
//             {" / "}
//             <span>{categoryDetails.title}</span>
//           </motion.div>
//         </div>
//       </section>

//       {/* 2. Products Grid Section */}
//       <section className="py-16 lg:py-24 bg-gray-100">
//         <div className="container mx-auto px-4">
//           {productsInCategory.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//               {productsInCategory.map((product, index) => (
//                 <motion.div
//                   key={product.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.05 }} // Stagger animation
//                 >
//                   {/* Reuse the ProductCard component */}
//                   <ProductCard product={product} />
//                 </motion.div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-center text-gray-600">
//               No products found in this category yet.
//             </p>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }
