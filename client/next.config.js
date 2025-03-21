/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    appDir: false,
  },
  output: "export",
  images: {
    unoptimized: true,
  }
};