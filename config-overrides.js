const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  webpack: (config) => {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        new MonacoWebpackPlugin({
          // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
          languages: ['json'],
        }),
      ],
    };
  },
  jest: function (config) {
    return {
      ...config,
      setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    };
  },
};
