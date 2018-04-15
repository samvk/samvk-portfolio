const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const { URL } = require('url');

const HMRPlugin = webpack.HotModuleReplacementPlugin;
const ModConcatPlugin = webpack.optimize.ModuleConcatenationPlugin;

const API_PORT = +(process.env.API_PORT || 8080);
const prod = process.env.NODE_ENV === 'production';
const devTool = prod ? false : 'eval-source-map';

const minifyRules = prod ? {
    removeAttributeQuotes: true,
    collapseWhitespace: true,
    html5: true,
    minifyCSS: true,
    removeComments: true,
    removeEmptyAttributes: true,
} : false;

module.exports = {
    entry: './src/script.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script-bundle.js',
        publicPath: '/',
    },
    devtool: devTool,
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json'],
        modules: [
            // paths to resolve imports
            path.resolve('./src/script/modules'),
            path.resolve('./src/script'),
            path.resolve('./src'),
            path.resolve('./node_modules'),
        ],
        mainFiles: ['index'],       // import 'index.js(x)' module by default when just path given
    },
    module: {
        rules: [
            // { test: "regex for file type", use: "name of the npm package" }
            // WARNING: loader ("use") order *does* matter.
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
            },
            {
                test: /^((?!\.global).)*s?css$/,
                use: [
                    { loader: 'style-loader', options: { sourceMap: true } },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[local]__[hash:base64:5]',
                        },
                    },
                    'postcss-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: ['./src/style/variables/**/*.css'],
                        },
                    },
                ],
            },
            // *.global.(s)css does not modularize
            {
                test: /\.global.s?css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    'postcss-loader',
                ],
            },
            {
                test: /\.(ttf|otf|eot|svg|woff2?|png|gif|jpe?g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 30000,
                        outputPath: 'img/',
                    },
                }],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 8090,
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
            'Access-Control-Allow-Headers': 'content-type',
        },
        proxy: {
            '/api': {
                target: `http://us.bmp.local:${API_PORT}`,
                router(req) {
                    let ret = null;
                    try {
                        const url = new URL(req.headers.origin ||
                            `http://${req.headers.host}`);
                        url.port = API_PORT;
                        ret = url.toString();
                    } catch (e) {
                        console.error('PROXY Error: ', e);
                        console.error('URL:', req.url);
                        console.error('HEADERS:', req.headers);
                    }

                    return ret;
                },
                changeOrigin: true,
            },
            '/images': {
                target: `http://us.bmp.local:${API_PORT}`,
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: minifyRules,
        }),
        new FaviconsWebpackPlugin({
            logo: './src/img/favicon.png',
            background: '#ffffff',
            title: 'SamVK',
            emitStats: false,    // *supposed* to stop the favicons from printing to console (but seemingly not working)
        }),
        new CopyWebpackPlugin([
            { from: 'src/docs/', to: 'docs/' },
        ]),
        new HMRPlugin(),
        new ModConcatPlugin(),
    ],
};
