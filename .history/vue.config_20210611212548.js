/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Zhihaot1
 * @Date: 2021-06-11 21:25:41
 * @LastEditors: Zhihaot1
 * @LastEditTime: 2021-06-11 21:25:42
 */
module.exports = {
  publicPath: "./",
  assetsDir: "static",
  outputDir: 'dist',
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'common': '@/common',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}