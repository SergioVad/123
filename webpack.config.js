const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = (env) => {
    return {
        mode: env.mode || 'development',
        entry: path.resolve('src', 'index.js'),
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve('build'),
            clean: true,
            publicPath: '/',
        },
        devServer: {
            open: true,
            compress: true,
            port: 3000,
            historyApiFallback: true,
            hot: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve('public', 'index.html'),
            }),
            env.mode === 'production' && new MiniCssExtractPlugin(),
            new webpack.ProgressPlugin(),
        ],
        resolve: {
            alias: {
                '@': path.resolve('src'),
            },
            extensions: ['.js', '.jsx'],
            modules: [path.resolve('src'), 'node_modules'],
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/i,
                    loader: 'babel-loader',
                },
                {
                    test: /\.css$/i,
                    use: [
                        env.mode === 'production'
                            ? MiniCssExtractPlugin.loader
                            : 'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    auto: (resPath) =>
                                        resPath.includes('.module.'),
                                    localIdentName:
                                        env.mode !== 'production'
                                            ? '[path][name]__[local]--[hash:base64:5]'
                                            : '[hash:base64:8]',
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.(eot|ttf|woff|woff2|png|jpg|gif)$/i,
                    type: 'asset',
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                },
            ],
        },
        devtool: 'eval-cheap-module-source-map',
    };
};
