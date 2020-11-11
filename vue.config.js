const resolve = dir => require('path').join(__dirname, dir)

module.exports = {
    publicPath: './',
    lintOnSave: false,// 是否在保存的时候检查
    configureWebpack: {
        resolve: {
            //配置路径别名
            alias: {
                '@': resolve('src'),
                '@components':resolve('src/components'),
                '@assets':resolve('src/assets'),
                '@util':resolve('src/util'),

            }
        }
    },
    devServer: {
        overlay: { // 让浏览器 overlay 同时显示警告和错误
            warnings: true,
            errors: true
        },
        open: true, // 是否打开浏览器
        host: "localhost",
        port: "8080", // 代理断就
        https: false,
        hotOnly: true, // 热更新
        proxy: {
            "/": {
                target:
                    "http://localhost:3000", // 目标代理接口地址 http://勿忘
                secure: false,
                changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端

            }
        }

    }
}
