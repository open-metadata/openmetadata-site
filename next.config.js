/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/index.md",
        destination: "/api/md",
      },
      {
        source: "/:slug.md",
        destination: "/api/md/:slug",
      },
      {
        source: "/:a/:slug.md",
        destination: "/api/md/:a/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
