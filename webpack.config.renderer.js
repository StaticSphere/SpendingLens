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

    entry: './src/renderer/main.tsx',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'renderer.js'
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader" 
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