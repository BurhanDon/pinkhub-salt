const nextConfig = {
  compiler: {
    react: {
      // Enables the experimental React Compiler using the correct structure
      experimental: true,
    },
  },
  // If you have other configurations, add them here
  // e.g., experimental: { serverActions: true, },
};

// Use export default for .mjs files
export default nextConfig;