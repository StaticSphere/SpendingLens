const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    target: 'electron-main',
    node: {
        fs: 'empty',
        __dirname: false,
        __filename: false
    },

    entry: './src/main/main.ts',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },

    resolve: {
        extensions: ['.ts']
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
        new CleanWebpackPlugin(['dist/main.js*'], {
            root: __dirname
        }),
    ]
};