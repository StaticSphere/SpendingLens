/* eslint-disable */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target: 'electron-renderer',
    node: {
        fs: 'empty',
        __dirname: false,
        __filename: false
    },

    entry: './src/renderer/main.jsx',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'renderer.js'
    },

    resolve: {
        extensions: ['.jsx', '.js']
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['dist/renderer.js*', 'dist/index.html'], {
            root: __dirname
        }),
        new HtmlWebpackPlugin({
            template: 'src/renderer/index.html'
        })
    ]
};