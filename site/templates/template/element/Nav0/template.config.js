import component from './index';

import less from '!raw-loader!./index.less';
import templateStr from '!raw-loader!./index';

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: 'header0 home-page-wrapper',
    },
    page: {
      className: 'home-page',
    },
    logo: {
      className: 'header0-logo',
      children:'https://img.acadsoc.com.cn/web/img/logo-blue.png',
      href: 'https://www.acadsoc.com.cn',
    },
    headerText: {
      className: 'header0-text',
      children: [
        {
          name: 'title',
          children:'省时 · 省钱 · 专业 · 贴心 · 有保障'
        }
      ]
    },
    Phone: {
      className: 'header0-menu',
      children: 'https://img.acadsoc.com.cn/web/img/tel-blue.png',
    },
  },
};
// text: '省时 · 省钱 · 专业 · 贴心 · 有保障',