const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = composePlugins(withNx(), withReact(), (config) => {
  config.plugins.push(new VanillaExtractPlugin());

  return config;
});
