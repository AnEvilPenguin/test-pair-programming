const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        app: "./src/index.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            title: "Change in webpack.common",

            filename: "index.html",
            inject: "head",
            scriptLoading: "defer",
        }),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.jpg$/i,
                type: "asset/resource",
            },
        ],
    },
};
