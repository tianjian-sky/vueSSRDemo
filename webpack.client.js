var configBase = require('./webpack.base')
var merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

var configClient = {
    entry: {
        app: './src/client-entry.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/vueSSR'),
        filename: 'client.[chunkhash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/template/index.html'),
        })
    ]
}

var output = merge([configClient, configBase]);

module.exports = output
