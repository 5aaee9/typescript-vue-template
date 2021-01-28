import * as path from 'path'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'
import webpack from 'webpack'

type ModeType = 'production' | 'development'

export const mode: ModeType =
    process.env.NODE_ENV === 'production' ? 'production' : 'development'

const cssLoader = {
    loader: 'css-loader',
    options: {
        esModule: false,
    },
}

const config: webpack.Configuration = {
    entry: './src/index.ts',
    mode,
    output: {
        path: path.resolve(__dirname, '../build/dist'),
        publicPath: '/dist/',
        filename: 'build.[fullhash].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    cssLoader,
                    'postcss-loader',
                ],
            }, {
                test: /\.s[ac]ss$/,
                use: [
                    'vue-style-loader',
                    cssLoader,
                    'postcss-loader',
                    'sass-loader',
                ],
            }, {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: [
                            'vue-style-loader',
                            cssLoader,
                            'postcss-loader',
                            'sass-loader',
                        ],
                    },
                    // other vue-loader options go here
                },
            }, {
                test: /\.(tsx|js|ts)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    transpileOnly: true,
                    appendTsSuffixTo: ['\\.vue$'],
                },
            }, {
                test: /\.svg$/,
                loader: 'url-loader',
                options: {
                    esModule: false,
                },
            }, {
                test: /\.(png|jpg|gif|woff2|ttf|eot|woff)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                    esModule: false,
                },
            }, {
                test: /\.ico$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            },
        ],
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.join(__dirname, '../src'),
        },
        extensions: ['*', '.js', '.ts', '.vue', '.json'],
    },
    performance: {
        hints: false,
    },
    devtool: 'hidden-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: 'index.html',
            inject: true,
        }),
        new VueLoaderPlugin(),
        new CopyPlugin({
            patterns: [
                { from: 'static', to: '../' },
            ],
        }),
    ],
}

export default config
