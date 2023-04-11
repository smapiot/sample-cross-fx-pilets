const { VueLoaderPlugin } = require('vue-loader');

module.exports = function (config) {
  config.module.rules.unshift({
    test: /\.vue$/,
    use: 'vue-loader'
  });
  config.plugins.push(new VueLoaderPlugin());
  return config;
};
