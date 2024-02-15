/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*/directions',
        destination: '/:path*/directions/trading',
        permanent: true,
      },
      {
        source: '/',
        destination: '/ru',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
