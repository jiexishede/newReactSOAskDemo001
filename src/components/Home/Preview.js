//  Componnets 所有 应用的组件

// Home.  在 views/中一个名为Home的 view,  则陈 components/ 中就有一个名为Home的子文件夹.

// Home/

// Home/ xxx  .. :  xxx -> Home 页面中组件     xxx .js  zujian   xxx.css  样式  xxxRedux.js   xxx组件的 reducer,action
// creator, action stype, constant,  整合在同一文件夹 中.
//

import React, { Component } from 'react';
import './Preview.css'

class Preview extends Component {
  static  propTypes = {
    title:React.PropTypes.string,
    link:React.PropTypes.string,
  };

  render() {
    return (
      <article className="article-preview-item">
        <h1 className="title">{this.props.title}</h1>
        <span className="date">{this.props.date}</span>
        <p className="desc">{this.props.description}</p>
      </article>
    );
  }
}

export  default  Preview;