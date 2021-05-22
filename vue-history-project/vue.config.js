const { name } = require('./package') // 与子应用注册时的name对应
module.exports = {
  devServer: {
    port: 8081,
    headers: {
      'Access-Control-Allow-Origin': '*' // 开发环境运行跨域
    },
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
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`
    },
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter'
    }
  }
}
