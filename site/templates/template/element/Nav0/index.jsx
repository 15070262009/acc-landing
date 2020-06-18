import React from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
/* replace-start-value = import { getChildrenToRender } from './utils'; */
import { polyfill } from 'react-lifecycles-compat';
import { getChildrenToRender } from '../../utils';
/* replace-end-value */
/* replace-start */
import './index.less';
/* replace-end */

const { Item, SubMenu } = Menu;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: undefined,
      /* replace-start */
      openKeys: [],
      /* replace-end */
    };
  }

  /* replace-start */
  static getDerivedStateFromProps(props, { prevProps }) {
    const nextState = {
      prevProps: props,
    };
    const { func } = props;
    if (prevProps && func) {
      nextState.phoneOpen = func.open;
      nextState.openKeys = func.currentMenu ? [func.currentMenu] : [];
    }

    return nextState;
  }
  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const {
      phoneOpen
    } = this.state;
    return (
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: 'from' }}
        {...dataSource.wrapper}
        {...props}
      >
        <div
          {...dataSource.page}
          className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
        >
          <TweenOne
            animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
            {...dataSource.logo}
          >
            <a href={dataSource.logo.href}>
              <img width="100%" src={dataSource.logo.children} alt="img" />
            </a>
          </TweenOne>

          <TweenOne
            animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
            {...dataSource.headerText}
          >
            {dataSource.headerText.children.map(getChildrenToRender)}
          </TweenOne>

          <TweenOne
            {...dataSource.Phone}
            animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
          >
            <span>
              <img width="100%" src={dataSource.Phone.children} alt="img" />
            </span>
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

/* replace-start-value = export default Header */
export default polyfill(Header);
/* replace-end-value */
