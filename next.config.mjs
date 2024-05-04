/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      { hostname: "localhost" },
      {
        hostname:
          "port-0-time-attack-fullstack-server-refactor-dc9c2nltdolfnd.sel5.cloudtype.app",
      },
    ],
  },
};

export default nextConfig;
