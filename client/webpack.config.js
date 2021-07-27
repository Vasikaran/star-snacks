const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
    entry: ["webpack-hot-middleware/client", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "js/[name].js",
        publicPath: "/public"
    },
    devtool: "source-map",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'css/[name].css' }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
