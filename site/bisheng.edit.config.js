
const commonConfig = require('./bisheng.common.config');
/*
  这里是编辑器入口配置
 */
module.exports = { source: {},
  output: './_site/edit',
  root: '/edit/',
  entryName: 'edit',
  theme: './site/edit',
  htmlTemplate: './site/edit/static/index.html',
  port: 7112,
  themeConfig: {
  },
  ...commonConfig };
