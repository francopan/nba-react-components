const webpack = require("webpack");
const path = require("path");

const config = {
  entry: ["./src/components/MatchCardList.tsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    libraryTarget: "amd",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
      }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    },
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    },
  },
  devServer: {
    contentBase: "./dist",
  },
};

module.exports = config;
