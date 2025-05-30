/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www-asia.nissan-cdn.net',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
