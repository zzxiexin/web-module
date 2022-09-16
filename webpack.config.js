module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    cjs: "./cjs/index.js",
    esm: "./esm/index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      },
    ],
  },
};
