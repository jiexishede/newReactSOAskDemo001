
// views  应用中 某个页面的入口问津啊, 一般为路由组件

// Home.js 首页的入口
import React from 'react';
import { connect } from 'react-redux';
import PreviewList from '../components/Home/PreviewList';
import { actions } from './HomeRedux';
import { push } from 'react-router-redux';

/// 这个 地方 ,用来 把  Redux 里面的东西拿出来和 当前里面的代码关联起来.
//  connect 函数返回了一个 高阶组件生成器, 而泽火革生成器会基于原始组件生成一个全新的组件,并给这个组件添加额外的props.
@connect(state => {
  return {
    articleList: state.home.list.articleList,
    loading: state.home.list.loading,
    error: state.home.list.error,
  };
}, {
  push,
  ...actions,
})
class Home extends React.Component {
  render() {
    const { loadArticles, articleList, push } = this.props;

    return (
        <div>
          <h1>Home</h1>
          <PreviewList {...this.props} />
        </div>
    );
  }
}
/// 这里 导出的组件是将  Home  组件传入connect 函数调用胡结果后最终生成的组件 .
export default Home;
