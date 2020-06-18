const commonConfig = require('./bisheng.common.config');
/*
  这里是预览入口配置
 */
module.exports = { source: {},
  output: './_site/templates',
  root: '/templates/',
  entryName: 'templates',
  theme: './site/templates',
  htmlTemplate: './site/templates/static/index.html',
  port: 7113,
  themeConfig: {
  },
  ...commonConfig };
