const {
  override,
  fixBabelImports,
  addPostcssPlugins,
} = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addLessLoader({
    //改主题颜色
    javascriptEnabled: true,
  }),
  addPostcssPlugins([require('tailwindcss'), require('autoprefixer')])
)
