const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  //  configureWebpack:{
  //   resolve: {
  //     alias: {
  //       'assets': '@/assets',
  //       'common': '@/common',
  //       'components': '@/components',
  //       'network': '@/network',
  //       'configs': '@/configs',
  //       'views': '@/views',
  //       'plugins': '@/plugins',
  //     }
  //   }
  // }
  configureWebpack: (config) => {
    console.log(config);
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.36.117:18091',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
      '/ws/dispatch': {
        target: 'http://192.168.36.117:18091',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/ws/dispatch': '',
        },
      },
      '/cti/': {
        target: 'http://192.168.36.117:18091',
        changeOrigin: true,
      },
      "/ui-platform": {
        target: "http://81.69.220.174:9001/",
        changeOrigin: true,
        pathRewrite: {
          "^/ui-platform": "",
        },
      },
    },
  }
});
