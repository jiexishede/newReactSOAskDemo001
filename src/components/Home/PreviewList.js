import React, { Component } from 'react';
import Preview from './Preview'

class PreviewList extends  Component {
  static PropTypes = {
    loading:PropTypes.bool,
    error:PropTypes.bool,
    articleList: React.PropTypes.arrayOf(React.PropTypes.object),
    loadArticles: PropTypes.func
  };

  componentDidMount(){
    this.props.loadArticles();
  }

  render(){
    const { loading, error, articleList } = this.props;
    if(error){
      return <p className="message">)0ops, something is wrong. </p>
    }
    if(loading){
      return <p className="message">Loading....</p>
    }
    return this.props.articleList.map(item => (
        <Preview {...item} key={item.id}/>
    ))
  }
}

export  default  PreviewList;