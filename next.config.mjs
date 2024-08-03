/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["via.placeholder.com"],
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
