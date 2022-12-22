//配置代理解决跨域
 const Proxy = require('http-proxy-middleware')
 module.exports = function (app) {
   app.use(
        Proxy.createProxyMiddleware('/api',{
            target:'http://localhost:3000',
            changeOrigin:true,
            pathRewrite:{'^/api':''}
        })
    )
 }