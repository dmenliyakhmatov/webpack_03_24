const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isDev = env.MODE === "development";

  return {
    mode: env.MODE,
    devtool: false,
    devServer: isDev
      ? {
          open: false,
          hot: true,
          port: 3000,
        }
      : undefined,

    entry: {
      main: path.resolve(__dirname, "src/index.js"),
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].js",
      clean: true,
      assetModuleFilename: "assets/[hash][ext]",
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src/index.html"),
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
      }),
    ],

    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
            },
          ],
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
          type: "asset/resource",
        },
      ],
    },
  };
};
