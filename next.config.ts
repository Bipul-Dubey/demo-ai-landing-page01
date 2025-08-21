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
    // Do NOT add your own domain or public here. Not needed.
  },
};

module.exports = nextConfig;
