/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
