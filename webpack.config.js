const path = require('path');

module.exports = () => {
  const dev = true;
  return {
    mode: dev ? 'development' : 'production',
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: dev ? '[name].js' : '[name].min',
      sourceMapFilename: dev ? '[name].map' : '[name].min.map',
      libraryTarget: 'umd',
    },
    devtool: 'source-map',
    // 加载babel进行代码降级
    module: {
      rules: [
        {
          test: /\.js$/i,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    // 开启 webpack-dev-server 插件
    devServer: {
      port: 8000,
      open: true,
    },
  };
};
