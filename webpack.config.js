const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  devServer: {
    port: 9000,
  },
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true, // 清除上一次的产物
  },

  // watch: true, // 代码更新自动打包,使用devServer默认开启
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    // 根据模板生成html
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: 'body'
    }),
  ],
};
