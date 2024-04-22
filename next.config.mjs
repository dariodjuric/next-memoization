/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    logging: "verbose",
    fetches: {
      fullUrl: true,
    },
  }
};

export default nextConfig;
