const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: [
        {
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
      ],
    });

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `@import "@src/styles/index.scss";`,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.whywe.ru",
        port: "",
        pathname: "/file/preview/**",
      },
    ],
  },
};

module.exports = nextConfig;
