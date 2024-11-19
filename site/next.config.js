/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'JM Kasm Registry',
    description: 'Custom images for Kasm',
    icon: '/img/logo.svg',
    listUrl: 'https://jrm0020.github.io/kasm-registry',
    contactUrl: 'https://jrm0020/github.io/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
