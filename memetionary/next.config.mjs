/** @type {import("next").NextConfig} */
const config = {
  crossOrigin: false,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.*',
      },
      {
        protocol: 'http',
        hostname: '**.*',
      },
    ],
  },
};

export default config;
