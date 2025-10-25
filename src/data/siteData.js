export const categories = [
  {
    id: "edible-salt",
    title: "Edible Salt",
    description: "Pure, mineral-rich Himalayan salt perfect for culinary use.",
    image: "/images/Category-Card.png", // Replace with your 400x400 image
    products: [
      {
        id: "fine-pink-salt-1kg",
        name: "Fine Pink Himalayan Salt (1kg)",
        description:
          "Finely ground pink salt, ideal for everyday seasoning and cooking.",
        image: "/images/Category-Card.png", // Replace with product image
        // Add more details like specs, sizes, packaging options later
      },
      {
        id: "coarse-pink-salt-500g",
        name: "Coarse Pink Himalayan Salt (500g)",
        description:
          "Larger crystals perfect for grinders, salt crusts, and brining.",
        image: "/images/Category-Card.png", // Replace with product image
      },
      {
        id: "black-salt-coarse-250g",
        name: "Himalayan Black Salt (Kala Namak) - Coarse (250g)",
        description:
          "Distinct sulfuric flavor, commonly used in South Asian cuisine.",
        image: "/images/Category-Card.png", // Replace with product image
      },
    ],
  },
  {
    id: "salt-lamps-decor",
    title: "Salt Lamps & Decor",
    description:
      "Handcrafted lamps and decor items to purify air and enhance ambiance.",
    image: "/images/Category-Card.png", // Replace with your 400x400 image
    products: [
      {
        id: "natural-salt-lamp-medium",
        name: "Natural Shape Salt Lamp (Medium 2-3kg)",
        description:
          "Unique, natural shape lamp providing a warm, ambient glow.",
        image: "/images/Category-Card.png", // Replace with product image
      },
      {
        id: "usb-salt-lamp-pyramid",
        name: "USB Salt Lamp (Pyramid Shape)",
        description: "Compact pyramid lamp powered by USB, perfect for desks.",
        image: "/images/Category-Card.png", // Replace with product image
      },
    ],
  },
  {
    id: "health-wellness",
    title: "Health & Wellness",
    description: "Natural products for spa, bath, and therapeutic uses.",
    image: "/images/Category-Card.png", // Replace with your 400x400 image
    products: [], // Add products later
  },
  {
    id: "kitchenware",
    title: "Kitchenware",
    description: "Salt blocks, plates, and bowls for cooking and serving.",
    image: "/images/Category-Card.png", // Replace with your 400x400 image
    products: [], // Add products later
  },
  {
    id: "animal-lick-salt",
    title: "Animal Lick Salt",
    description: "Essential mineral blocks for livestock and pets.",
    image: "/images/Category-Card.png", // Replace with your 400x400 image
    products: [], // Add products later
  },
  {
    id: "industrial-salt",
    title: "Industrial Salt",
    description: "High-quality salt for various industrial applications.",
    image: "/images/Category-Card.png", // Replace with your 400x400 image
    products: [], // Add products later
  },
];

// Function to get all products (optional helper)
export const getAllProducts = () => {
  return categories.reduce(
    (acc, category) => acc.concat(category.products),
    []
  );
};
