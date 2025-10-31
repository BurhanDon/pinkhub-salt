import allProducts from "@/data/products.json";
import CategoriesSection from "./CategoriesSection";

export const metadata = {
  title: "Our Product Categories | Raqeeb Salt",
  description:
    "Explore all product categories offered by Raqeeb Salt, including edible salt, salt lamps, wellness products, and more.",
};

// Extract unique categories
const getCategoriesFromProducts = (products) => {
  const categoryMap = new Map();
  if (!Array.isArray(products)) return [];

  products.forEach((product) => {
    if (!product?.category) return;

    if (!categoryMap.has(product.category)) {
      categoryMap.set(product.category, {
        id: product.category,
        title: product.category
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase()),
        description: `Explore our range of ${product.category.replace(
          /-/g,
          " "
        )} products.`,
        image: `/images/Category-Card.png`,
      });
    }
  });

  return Array.from(categoryMap.values());
};

export default function ProductsPage() {
  const categories = getCategoriesFromProducts(allProducts);

  return <CategoriesSection categories={categories} />;
}
