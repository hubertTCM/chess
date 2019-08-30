import { Configuration, NamedModulesPlugin } from "webpack";
import CleanWebpackPlugin from "clean-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

const config: Configuration = {
  resolve: {
    // js is required for the 3rd component, eg: webpack/hot
    // https://github.com/webpack/webpack-dev-server/issues/720
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        //loader: "awesome-typescript-loader"
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new NamedModulesPlugin(),
    new ForkTsCheckerWebpackPlugin({
      workers: ForkTsCheckerWebpackPlugin.ONE_CPU,
      memoryLimit: 512
    })
  ]
};

export default config;
