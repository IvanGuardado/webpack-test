var path = require("path");

module.exports = {
  entry: "./public/app/main.js",
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: path.join(__dirname, "dist/"),
    filename: "bundle.js",
    chunkFilename: "[id].chunk.js"
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "raw"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  resolve: {
    alias: {
      render: __dirname + '/public/app/lib/render.js'
    }
  }
};
