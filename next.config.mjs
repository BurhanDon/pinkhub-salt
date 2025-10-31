// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is the correct flag for your version
  reactCompiler: true, 

  images: {
    // This part is correct and we will keep it
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;