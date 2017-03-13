//  layouts : 负责布局相关的组件及样式: 例如菜单, 侧边栏,  header和, footer 等..

import React, { Component } from 'react';
import { Link } from "react-router";

class Nav extends Component {

  render () {
    return (
        <nav>
          <Link to="/">Home</Link>
        </nav>
    );
  }
}


export default Nav;
