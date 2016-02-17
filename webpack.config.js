const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        main: './server.js',
    },
    output: {
        path: './wwww',
        filename: 'wwww.js',
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                test: /\.js?$/,
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0', 'react'],
                }
            }
        ]
    }
};