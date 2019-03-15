var configBase = require('./webpack.base')
var merge = require('webpack-merge')
var path = require('path')
var ssrPlugin = require('vue-ssr-webpack-plugin')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

var configServer = {
    target: 'node',
    entry: {
        serverEntry: './src/server-entry.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/vueSSR'),
        filename: '[name].[chunkhash].js',
        libraryTarget: 'commonjs2'
    },
    node: {
        fs: 'empty',
        net: 'empty',
        module: 'empty'
    },
    plugins: [ new VueSSRServerPlugin()]
}

var output = merge([configServer, configBase]);

module.exports = output

