const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            assets: path.resolve(__dirname, 'src/assets/'),
            constants: path.resolve(__dirname, 'src/constants/'),
            components: path.resolve(__dirname, 'src/components/'),
            actions: path.resolve(__dirname, 'src/actions/'),
            api: path.resolve(__dirname, 'src/api/'),
            reducers: path.resolve(__dirname, 'src/reducers/'),
            sagas: path.resolve(__dirname, 'src/sagas/'),
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};
