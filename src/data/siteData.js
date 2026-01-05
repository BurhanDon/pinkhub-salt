export const categories = [
  {
    id: "edible-salt",
    title: "Edible Salt",
    description: "Pure, mineral-rich Himalayan salt perfect for culinary use.",
    image: "/images/Category-Card.png",
    products: [
      {
        id: "fine-pink-salt-1kg",
        name: "Fine Pink Himalayan Salt (1kg)",
        description:
          "Finely ground pink salt, ideal for everyday seasoning and cooking.",
        image: "/images/Category-Card.png",
        featured: true,
      },
      {
        id: "coarse-pink-salt-500g",
        name: "Coarse Pink Himalayan Salt (500g)",
        description:
          "Larger crystals perfect for grinders, salt crusts, and brining.",
        image: "/images/Category-Card.png",
        featured: true,
      },
      {
        id: "black-salt-coarse-250g",
        name: "Black Salt (Kala Namak) - Coarse (250g)",
        description:
          "Distinct sulfuric flavor, commonly used in South Asian cuisine.",
        image: "/images/Category-Card.png",
      },
      {
        id: "white-salt-fine-1kg",
        name: "Fine White Himalayan Salt (1kg)",
        description:
          "Pure white salt, excellent for delicate flavors and presentation.",
        image: "/images/Category-Card.png",
        featured: true,
      },
    ],
  },
  // {
  //   id: "salt-lamps-decor",
  //   title: "Salt Lamps & Decor",
  //   description:
  //     "Handcrafted lamps and decor items to purify air and enhance ambiance.",
  //   image: "/images/Category-Card.png",
  //   products: [
  //     {
  //       id: "natural-salt-lamp-medium",
  //       name: "Natural Shape Salt Lamp (Medium 2-3kg)",
  //       description:
  //         "Unique, natural shape lamp providing a warm, ambient glow.",
  //       image: "/images/Category-Card.png",
  //       featured: true,
  //     },
  //     {
  //       id: "usb-salt-lamp-pyramid",
  //       name: "USB Salt Lamp (Pyramid Shape)",
  //       description: "Compact pyramid lamp powered by USB, perfect for desks.",
  //       image: "/images/Category-Card.png",
  //       featured: true,
  //     },
  //     {
  //       id: "salt-candle-holder-natural",
  //       name: "Natural Salt Tealight Holder",
  //       description:
  //         "Adds a warm, natural glow to any space with a tealight candle.",
  //       image: "/images/Category-Card.png",
  //       featured: true,
  //     },
  //     {
  //       id: "fire-bowl-lamp",
  //       name: "Salt Crystal Fire Bowl Lamp",
  //       description:
  //         "Chunks of salt crystals in a bowl, illuminated from below.",
  //       image: "/images/Category-Card.png",
  //       featured: true,
  //     },
  //   ],
  // },
  {
    id: "health-wellness",
    title: "Health & Wellness",
    description: "Natural products for spa, bath, and therapeutic uses.",
    image: "/images/Category-Card.png",
    products: [
      {
        id: "bath-salt-lavender-500g",
        name: "Himalayan Bath Salt - Lavender (500g)",
        description:
          "Relaxing bath salts infused with natural lavender essential oil.",
        image: "/images/Category-Card.png",
        featured: true,
      },
    ],
  },
  {
    id: "kitchenware",
    title: "Kitchenware",
    description: "Salt blocks, plates, and bowls for cooking and serving.",
    image: "/images/Category-Card.png",
    products: [
      {
        id: "salt-cooking-slab-large",
        name: "Himalayan Salt Cooking Slab (Large)",
        description:
          "Sear, grill, or chill foods directly on this natural salt block.",
        image: "/images/Category-Card.png",
        featured: true,
      },
    ],
  },
  {
    id: "animal-lick-salt",
    title: "Animal Lick Salt",
    description: "Essential mineral blocks for livestock and pets.",
    image: "/images/Category-Card.png",
    products: [
      {
        id: "animal-lick-block-5kg",
        name: "Animal Lick Salt Block (5kg with Rope)",
        description:
          "Provides essential minerals for cattle, horses, and other animals.",
        image: "/images/Category-Card.png",
        featured: true,
      },
    ],
  },
  {
    id: "industrial-salt",
    title: "Industrial Salt",
    description: "High-quality salt for various industrial applications.",
    image: "/images/Category-Card.png",
    products: [],
  },
];

// Helper function to get ONLY featured products
export const getFeaturedProducts = () => {
  return categories.reduce((acc, category) => {
    const featuredInCategory = category.products.filter((p) => p.featured);
    featuredInCategory.forEach((p) => (p.categoryId = category.id));
    return acc.concat(featuredInCategory);
  }, []);
};

// Helper function to get all products (unchanged)
export const getAllProducts = () => {
  return categories.reduce((acc, category) => {
    category.products.forEach((p) => (p.categoryId = category.id));
    return acc.concat(category.products);
  }, []);
};
