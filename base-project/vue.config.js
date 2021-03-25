module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '/apis': {
        target: 'https://movie.douban.com/', // target host
        ws: true, // proxy websockets
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          '^/apis': '' // rewrite path
        }
      }
    }
  },
  configureWebpack: {
    externals: {
      'vue': 'Vue2',
      'vue-router': 'VueRouter'
    }
  }
}
