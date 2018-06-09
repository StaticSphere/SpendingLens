/* eslint-disable */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    target: 'electron-main',
    node: {
        fs: 'empty',
        __dirname: false,
        __filename: false
    },

    entry: './src/main/main.js',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },

    resolve: {
        extensions: ['.js']
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['dist/main.js*'], {
            root: __dirname
        }),
    ]
};