
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos'],
  },
  async redirects() {
    return [
      {
        source: '/amritsar',
        destination: '/destinations/amritsar-tour-packages',
        permanent: true,
      },
      {
        source: '/kerala',
        destination: '/destinations/kerala-tour-packages',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
