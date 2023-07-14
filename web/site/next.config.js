/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: {
      displayName: false
    }
  }
};

module.exports = nextConfig;
