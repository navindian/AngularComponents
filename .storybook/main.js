module.exports = {
  stories: ["../src/**/*.stories.(ts|mdx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-notes",        
    "@storybook/addon-a11y/register",
    "@storybook/addon-storysource",
    "@storybook/addon-viewport/register",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-knobs"
  ],
};
