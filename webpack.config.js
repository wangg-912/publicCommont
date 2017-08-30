let path = require("path");
let webpack = require("webpack");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let OpenBowserPlugin = require("open-browser-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, 'app/index.jsx'),
    output:{
        path:__dirname+"/build",
        filename:"bundle.js"
    },
    devtool:"source-map",
    resolve: {
        modules: [__dirname, 'node_modules'],
        alias:{},
        extensions: ['*','.js','.jsx']
     },
    module:{
        loaders:[
            {//加载规则：除了node_modules文件之外，其他所有符合/\.js$正则表达式的文件都将用于babel-loader编译;
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
            { 
                test: /\.css$/, 
                exclude: /node_modules/, 
                loader: 'style!css!postcss'
             },
            {
                test: /\.less$/,
                loaders: ['style-loader', 'css-loader', 'less-loader']
            },
            { 
                test:/\.(png|gif|jpg|jpeg|bmp)$/i, 
                loader:'url-loader?limit=5000' },  // 限制大小5kb
            { 
                test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, 
                loader:'url-loader?limit=5000'
            } // 限制大小小于5k
        ]
    },
    // eslint:{
    //     configFile:'.eslintrc'
    // },
    plugins:[
        new HtmlWebpackPlugin({//加载模板
            template:__dirname + "/app/temp.html"
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),//分模块
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('/css/[name].[chunkhash:8].css'),//分离css和脚本
        new OpenBowserPlugin({//自动打开浏览器
            url:'http://localhost:9999'
        }),
        // new webpack.DefinePlugin({
        //     __DEV__:JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || "false"))
        // })
        //告诉 React 当前是生产环境，请最小化压缩 js
        new webpack.DefinePlugin({ 
            'process.env':{ 
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV) }
             })
    ],
    devServer:{
        proxy:{
            "/api":{
                target:"http://localhost:8888",
                secure:false
            }
        },
        inline:true,
        hot:true
    }

}