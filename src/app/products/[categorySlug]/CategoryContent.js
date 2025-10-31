// // src/app/products/[categorySlug]/CategoryContent.js

// "use client"; // This directive marks the component for client-side rendering

// import React from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import ProductCard from '@/components/ProductCard';

// export default function CategoryContent({ categoryName, productsInCategory }) {
//   return (
//     <>
//       {/* 1. Banner Section (now wrapped in a Client Component) */}
//       <section className="relative py-20 md:py-28 bg-gradient-to-t from-gray-100 to-white">
//         <div className="container mx-auto px-4 relative z-10 text-center">
//           <motion.h1
//             className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             {categoryName}
//           </motion.h1>
           
//            {/* Breadcrumbs */}
//            <motion.div
//              className="text-sm text-gray-500 mt-4"
//              initial={{ opacity: 0 }}
//              animate={{ opacity: 1 }}
//              transition={{ duration: 0.6, delay: 0.2 }}
//             >
//              <Link href="/" className="hover:text-primary">Home</Link>
//              {' / '}
//              <Link href="/products" className="hover:text-primary">Products</Link>
//              {' / '}
//              <span>{categoryName}</span>
//            </motion.div>
//         </div>
//       </section>

//       {/* 2. Products Grid Section */}
//       <section className="py-16 lg:py-24 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//             {productsInCategory.map((product, index) => (
//               <motion.div
//                 key={product.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.05 }}
//               >
//                 <ProductCard product={product} />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
