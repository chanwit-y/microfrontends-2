const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    //     historyApiFallback: {
    //       index: "index.html",
    //     },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        // marketing: "marketing@http://localhost:8081/remoteEntry.js",
        // products: "products@http://localhost:8081/remoteEntry.js",
        foo: "foo@http://localhost:8081/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};

module.exports = merge(commConfig, devConfig);
