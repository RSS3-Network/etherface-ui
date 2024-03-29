/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    ETHERFACE_REST_ADDRESS: process.env.ETHERFACE_REST_ADDRESS,
  },

  // Redirect any request from "/" to "/hash"
  async redirects() {
    return [
      {
        source: "/",
        destination: "/hash",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/v1/:path*",
        destination: "https://etherface.rss3.io/v1/:path*",
      },
    ];
  },
};
