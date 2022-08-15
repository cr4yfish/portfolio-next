/** @type {import('next').NextConfig} */
const { createSecureHeaders } = require("next-secure-headers");


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  async headers() {
    return [{ source: "/:path", headers: createSecureHeaders() }];
  }
}

module.exports = nextConfig
