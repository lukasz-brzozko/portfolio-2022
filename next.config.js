/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio-2022",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
    // domains: ["localhost"],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: {
        loader: "@svgr/webpack",
        options: {
          svgoConfig: {
            plugins: [
              {
                name: "removeViewBox",
                active: false,
              },
            ],
          },
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
