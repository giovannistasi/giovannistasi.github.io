/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/boot-up",
        permanent: true,
      },
    ];
  },
  experimental: {
    appDir: false,
  },
  output: "export",
  basePath: "/giovannistasi.github.io", // Replace with your repo name if needed
  images: {
    unoptimized: true,
  },
};
