/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.graphassets.com"],
    // Enable dangerouslyAllowSVG
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
