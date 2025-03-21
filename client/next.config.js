/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  experimental: {
    appDir: false,
  },
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
