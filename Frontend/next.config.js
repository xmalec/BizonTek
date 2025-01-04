/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    VERSION: require('./package.json').version,
  },
};

module.exports = nextConfig;
