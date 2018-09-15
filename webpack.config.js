const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: resolve(__dirname, 'src/index.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle[hash:8].js'
    },
    devtool: 'eval-source-map',
    performance: {
        hints: false
    },
    devServer: {
        contentBase: './dist',
        disableHostCheck: true,
        inline: true,
        port: 3300
    },
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.(css|less)$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: require.resolve('less-loader') // compiles Less to CSS
                    }
                ],
            },
            {
                test: /.(jpg|png|git|svg)$/,
                use: ['url-loader?limit=8192&name=./[name].[ext]&outputPath=img/']
            },
            {
                test: /\.(woff|woff2|eot|ttf)(\?[a-z0-9]+)?$/,
                use: ['url-loader?limit=1000&name=styles/fonts/[name].[hash:6].[ext]']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '饿了么',
            inject: 'body',
            filename: './index.html',
            template: './index.html',

        }),
        new ExtractTextPlugin('./style.css')
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.png', '.svg']
    }

}