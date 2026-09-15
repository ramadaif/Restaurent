import path from "path";

import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    entry: "./src/index.js",

    output: {
        filename: "main.js",
        path: path.resolve(import.meta.dirname, "dist"),
        clean: true,
    },

    mode: "development",

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },

            {
                test: /\.html$/i,
                use: ["html-loader"],
            },
        ],
    },

    devServer: {
        watchFiles: ["./src/template.html"],
    },

    devtool: "eval-source-map",
};