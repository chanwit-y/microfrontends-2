const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    // historyApiFallback: true,
    historyApiFallback: {
      index: "./public/index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new ModuleFederationPlugin({
      name: "foo",
      filename: "remoteEntry.js",
      exposes: {
        "./FooApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
      // shared: ["react", "react-dom"],
    }),
  ],
};

module.exports = merge(commConfig, devConfig);