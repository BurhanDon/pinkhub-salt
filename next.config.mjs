/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    react: {
      // Enables the experimental React Compiler
      experimental: true,
    },
  },
  images: {
    // Allow loading from external placeholder for now
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  // Optional example for other experimental features
  // experimental: { serverActions: true },
};

export default nextConfig;
