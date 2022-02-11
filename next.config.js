const path = require("path");
const webpack = require('webpack');
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  reactStrictMode: true,
  target: 'serverless',
    webpack: config => {
        config.plugins.push(
            new webpack.DefinePlugin({ 'global.GENTLY': false }),
        );
        return config;
    },
};
