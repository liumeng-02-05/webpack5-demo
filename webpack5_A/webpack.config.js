const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: './index.js',
  mode: "production",
  output: {
		publicPath: "http://localhost:3001/", //部署后的资源地址
	},
  experiments: {
		topLevelAwait: true, // 试验性质顶级作用域允许await
	},
  // cache: {
  //   type: 'filesystem',
  //   cacheDirectory: path.join(__dirname, 'node_modules/.cac/webpack')
  // },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: ['style-loader', 'css-loader'],
  //     },
  //     {
  //       test: /\.(png|svg|jpg|jpeg|gif)$/i,
  //       type: 'asset',
  //       parser: {
  //         dataUrlCondition: {
  //           maxSize: 8 * 1024,
  //         },
  //       },
  //       generator: {
  //         filename: 'images/[name].[hash:6][ext]',
  //       },
  //     },
  //     {
  //       test: /\.html$/i,
  //       loader: "html-loader",
  //       options:{
  //         esModule:false,
  //       }
  //   },
  //   ],
  // },
  plugins: [
    // new ModuleFederationPlugin({
		// 	filename: "teamB.js",
		// 	name: "teamB",
		// 	remotes: {
		// 		// teamA: "teamA@http://localhost:3000/teamA.js",
    //     teamA: "teamA"
		// 	},
		// }),
    new ModuleFederationPlugin({
			name: "teamB",
      library: { type: "var", name: "teamB" },
			remotes: {
				// teamA: "teamA@http://localhost:3000/teamA.js",
        teamA: "teamA"
			},
		}),
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "./template/index.html",
    }),
  ],
  devServer: {
		open: false,
		host: "localhost",
		port: 3001, //本地调试
	},
  resolve: {
    fallback:  {
      "crypto": false
    }
  }
};