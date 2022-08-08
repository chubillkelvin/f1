module.exports = {
  stories: [{ directory: "../components" }],
  addons: ["@storybook/addon-controls"],
  framework: "@storybook/react",
  core: { builder: "webpack5" },
};
