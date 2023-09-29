/** @type {import('next').NextConfig} */

const nextConfig = {
  fontOptimization: false,
  experimental: {
    // disableNextSizeAdjust: true,
    appDir: true,
  },
};

module.exports = nextConfig;
