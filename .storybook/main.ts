import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: (webpackConfig) => {
    if (webpackConfig.module && webpackConfig.module.rules) {
      const imageRule = webpackConfig.module.rules.find((rule) => {
        if (rule && typeof rule !== "string" && rule.test instanceof RegExp) {
          return rule.test.test(".svg");
        }
      });

      if (imageRule && typeof imageRule !== "string") {
        imageRule.exclude = /\.svg$/;
      }

      webpackConfig.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
    }

    return webpackConfig;
  },
};

export default config;
