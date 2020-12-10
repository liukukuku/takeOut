const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/xxx', {
      target: 'https://elm.cangdu.org',
      changeOrigin: true,
      pathRewrite: {
        '^/xxx': ''
      }
    }),
  )
}
