const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  entry: './index.js',
  mode: "production",
  output: {
    path: path.join(__dirname, "dist"), //出口文件的路径
    filename: "[name].js", //打包后的文件名
  },
  module: {
    // rules: [
    //   {
    //     test: /\.css$/,
    //     use: ['style-loader', 'css-loader'],
    //   },
    //   {
		// 		test:/\.(jpg|png|jpeg|gif|svg)$/,//处理图片新增的代码
		// 		loader:'url-loader',
    //     options: {
    //       name:'[name][hash:5].[ext]',
    //       limit:100000,
    //       outputPath:'images'
    //     }
		// 	},
    //   {
    //     test: /\.html$/i,
    //     loader: "html-loader",
    //     options:{
    //       esModule:false,
    //     }
    // },
    // ],
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "./template/index.html",
    }),
    // new HardSourceWebpackPlugin()
  ],
  devServer: {
    // static: {
    //   directory: path.join(__dirname, 'dist'),
    // },
    // compress: true,
    port: 9000,
    hot: true,
  },
};