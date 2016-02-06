import webpack from 'webpack';

module.exports = {
    entry: {
        index: './src/js/index.js'
    },
    output: {
        path: 'dist',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.js$/,
            loader: 'babel'
        }]
    }
};
