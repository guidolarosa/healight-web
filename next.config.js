/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost"],
  },
  i18n: {
    locales: ['en', 'es-AR'],
    defaultLocale: 'en'
  }
}

module.exports = nextConfig


