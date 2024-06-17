/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const { mergeConfig } = require('vite');
const path = require('path');

const config = {
  stories: [ "../src/Intro.mdx", "../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ['../public'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-coverage",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite', 
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      css: {
        postcss: {
          plugins: [
            require('tailwindcss'),
            require('autoprefixer')
          ],
        },
      },
    });
  }
};
export default config;
