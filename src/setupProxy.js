const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/xxx', {
      target: 'http://vueshopxxxx.glbuys.com/',
      changeOrigin: true,
      pathRewrite: {
        '^/xxx': ''
      }
    }),
  )
}
