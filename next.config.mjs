/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old patches URL → new keyword URL (permanent, keeps any existing Google ranking)
      { source: '/embroidery-patch', destination: '/custom-patches', permanent: true },
    ];
  },
};

export default nextConfig;
