const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", "./chap49/index.js"],
  output: {
    path: path.resolve(__dirname, "dist2"),
    filename: "js/bundle.js",
  },
  module: {
    rules: [
      {
        test: /^.js$/,
        include: [path.resolve(__dirname, "chap49")],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  devtool: "source-map",
  mode: "development",
};
