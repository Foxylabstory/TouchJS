const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // он нам больше не нужен, очистка dist происходит в другом месте
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/pages/index.js',
    output: {
        filename: 'main[hash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, //очищает папку dist
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
        new MiniCssExtractPlugin(), // подключение плагина для объединения файлов
        //new CleanWebpackPlugin(), // использовали плагин для очистки dist
        
    ],

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader, 
                }, 
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                    },
                },
                {
                    loader: 'postcss-loader',
                }],
            },
            {
                test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource'
            },
            {
                test: /\.js$/,
                //use: 'babel-loader',
                loader: 'babel-loader',
                exclude: /node-modules/,
            },
        ],
    },

    devServer: {
        static: path.resolve(__dirname, './dist'),
        compress: true,
        port: 8088,
        open: true,
    },

    devtool: 'inline-source-map',
};