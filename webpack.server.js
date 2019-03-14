var configBase = require('./webpack.base')
var merge = require('webpack-merge')
var path = require('path')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

var configServer = {
    target: 'node',
    entry: {
        serverEntry: './src/server-entry.js',
        server: './src/server1.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/vueSSR'),
        filename: '[name].[chunkhash].js'
    },
    node: {
        fs: 'empty',
        net: 'empty',
        module: 'empty'
    }
}

var output = merge([configServer, configBase]);

module.exports = output

