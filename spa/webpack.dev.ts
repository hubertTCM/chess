import { Configuration } from "webpack";
import merge from "webpack-merge";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

import common from "./webpack.common";

const config: Configuration = merge(common, {
  entry: {
    index: "./src/index.tsx"
  },
  mode: "development",
  output: {
    filename: "[name]-[hash].bundle.js",
    path: path.resolve(__dirname, "./dist")
    //path: "../src/main/resources/static"
  },
  devtool: "inline-cheap-module-source-map",
  devServer: {
    contentBase: "./src",
    historyApiFallback: true,
    publicPath: "/",
    hot: true,
    inline: true,
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Chess",
      template: "./src/index.html",
      settings: {
        apiRootUrl: "http://localhost:8181/api"
      },
      chunks: ["index"],
      filename: "index.html"
    })
  ]
});

export default config;
