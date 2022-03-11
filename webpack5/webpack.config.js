const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  entry: './index.js',
  mode: "production",
  // target: [ 'node'],
  devtool: "source-map",
  // output: {
	// 	publicPath: "http://localhost:3000/", //部署后的资源地址
	// },
  // optimization: {
  //   moduleIds:'deterministic',
  // },
  experiments: {
		buildHttp: {
      allowedUris: [
        "https://fast-learn-oss.youbaobao.xyz/",
        "http://hp.hpbb.me//upload/20171108173745476048.jpeg?x-oss-process=style/thumb"
      ],
      frozen: false,
      cacheLocation: false,
      upgrade: true
    }// 试验性质顶级作用域允许await
	},
  // output: {
  //   path: path.join(__dirname, "dist"), //出口文件的路径
  //   filename: "[name].js", //打包后的文件名
  // },
  // cache: {
  //   type: 'filesystem',
  //   cacheDirectory: path.join(__dirname, 'node_modules/.cac/webpack')
  // },
  module: {
    rules: [
      // {
  //       test: /\.css$/,
  //       use: ['style-loader', 'css-loader'],
  //     },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
        generator: {
          filename: 'images/[name].[hash:6][ext]',
        },
      },
  //     {
  //       test: /\.html$/i,
  //       loader: "html-loader",
  //       options:{
  //         esModule:false,
  //       }
    // },
    ],
  },
  plugins: [
    // new ModuleFederationPlugin({
		// 	filename: "teamA.js",
		// 	name: "teamA",
    //   library: { type: "var", name: "teamA" },
		// 	exposes: {
		// 		"./componentA": "./A.js",
		// 	},
		// }),
    // new ModuleFederationPlugin({
		// 	filename: "remoteEntry.js",
		// 	name: "teamA",
    //   library: { type: "var", name: "teamA" },
		// 	exposes: {
		// 		"./componentA": "./A.js",
		// 	},
		// }),
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "./template/index.html",
    }),
  ],
  resolve: {
    fallback:  {
      "crypto": false,
    }
  },
  devServer: {
		open: false,
		host: "localhost",
		port: 3000, //本地调试
	},
};