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
          exclude: /node_modules/,
        },
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.css', '.scss'], // 添加在此的后缀所对应的文件可以省略后缀
    },
    // 开启 webpack-dev-server 插件
    devServer: {
      port: 8000,
      open: true,
    },
  };
};
