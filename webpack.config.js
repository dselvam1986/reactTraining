const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports= {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'dinoTestReactLibrary',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(css)$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns:[
                {from: './package.json', to: './'},
            ]
        })
    ]
}