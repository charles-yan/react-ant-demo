const { override, fixBabelImports, addLessLoader ,addWebpackResolve,addWebpackAlias,addDecoratorsLegacy} = require('customize-cra');
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
module.exports = override(
  // 针对antd实现按需打包: 根据import来打包(使用babel-plugin-import)
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,  // 自动打包相关的样式
  }),

  // 使用less-loader对源码中的less的变量进行重新指定
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
  //具体能用的方法查看 customize-cra 文档
  addWebpackResolve({
    extensions: ['.js', '.json', '.jsx'], //解析 查看webpact配置
  }),
  // 添加别名
  addWebpackAlias({
    '@': resolve('src'),
  }),
  //装饰器
  addDecoratorsLegacy()
)