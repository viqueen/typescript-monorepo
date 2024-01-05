import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';
import { Configuration as DevConfiguration } from 'webpack-dev-server';

const config: Configuration & DevConfiguration = {
    mode: 'development',
    devServer: {
        port: 9000,
        proxy: [
            {
                context: ['/gateway'],
                target: 'http://localhost:4000'
            }
        ]
    },
    entry: {
        app: './entry/index.tsx'
    },
    target: 'web',
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', '.scss', '.sass']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(sa?)?css$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'entry', 'index.html')
        })
    ]
};

// noinspection JSUnusedGlobalSymbols
export default config;
