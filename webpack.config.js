var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');

// NODE_ENV to production
// uglify

let config = {
    entry: './app/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.(jsx)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'app/index.html'
    })
    ]
}

if (process.env.NODE_ENV === 'production') {
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env' : {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin()
        )
    }



module.exports = config;