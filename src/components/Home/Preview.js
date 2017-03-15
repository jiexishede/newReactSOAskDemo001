//  Componnets 所有 应用的组件
// Home.  在 views/中一个名为Home的 view,  则陈 components/ 中就有一个名为Home的子文件夹.
// Home/
// Home/ xxx  .. :  xxx -> Home 页面中组件     xxx .js  zujian   xxx.css  样式  xxxRedux.js   xxx组件的 reducer,action
// creator, action stype, constant,  整合在同一文件夹 中.

import React, { Component } from 'react';
import './Preview.css'
import { hashHistory } from 'react-router';


class Preview extends Component {
  /// 检测 javascript 类型
  //  react 会在开发环境下 ,会对props的值做类型的检查,类型错误会有警告. 在开发环境中,不会进行检查,.
  static  propTypes = {
    title:React.PropTypes.string,
    link:React.PropTypes.string,
    desc:React.PropTypes.string,
    push:React.PropTypes.func,
  };


  componentDidMount(){
    console.log(this.props.id);
  }


  handleNavigate(id,e) {
    // 阻止原生连接跳转
    e.preventDefault();
    this.props.dispatchPush(`/detail/${id}`) ;     // does not work.
    // hashHistory.push(`detail/${id}`);
  }

  render() {
    return (
      <article className="article-preview-item">
        <h1 className="title">
          <a href={`/#/detail/${this.props.id}`} onClick={this.handleNavigate.bind(this,this.props.id)} >
            {this.props.title}
          </a>
        </h1>
        <span className="date">{this.props.date}</span>
        <p className="desc">{this.props.desc}</p>
      </article>
    );
  }
}

export  default  Preview;