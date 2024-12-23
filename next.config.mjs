/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "via.placeholder.com",
      "i.imgur.com",
      "raw.githubusercontent.com",
      "res.cloudinary.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
