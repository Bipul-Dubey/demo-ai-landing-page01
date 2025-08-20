// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        pathname: "/**",
      },
    ],
    // or (older syntax)
    // domains: ["assets.aceternity.com"],
  },
};

module.exports = nextConfig;
