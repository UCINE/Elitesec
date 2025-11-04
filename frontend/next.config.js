/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flowbite.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  output: 'standalone',
};

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})


module.exports = withNextra(nextConfig);
