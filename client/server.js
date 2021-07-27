const fs = require("fs");
const path = require("path");
const webpack = require('webpack');
const webpackDM = require("webpack-dev-middleware");
const webpackHM = require("webpack-hot-middleware");
const express = require("express");
const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require("./webpack.config.js");

const compiler = webpack(config);
const app = express();

app.use(
    webpackDM(compiler, {
        publicPath: "/public",
        stats: 'errors-only',
        writeToDisk: false
    })
);
app.use(webpackHM(compiler));

app.use('/graphql', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));

app.use(express.json());

app.use('/public', express.static("public"));
app.use('/app', express.static("app"));

app.listen(9090, err => {
    if (err) {
        throw err;
    }
    console.log("http://localhost:9090/app");
});