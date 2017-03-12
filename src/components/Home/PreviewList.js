import React, { Component } from 'react';
import Preview from './Preview'

class PreviewList extends  Component {
  static propTypes = {
    loading:React.PropTypes.bool,              //  注意 bushi PropTypes.bool,  前面要价 React
    error:React.PropTypes.bool,
    articleList: React.PropTypes.arrayOf(React.PropTypes.object),
    loadArticles: React.PropTypes.func
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

    // return this.props.articleList.map(item => (
    //     <Preview {...item} key={item.id}/>
    // ))

    return (
        <div>
          {articleList.map(item => {
            return <Preview {...item} key={item.id} push={this.props.push} />
          })}
        </div>
    );

  }
}

export  default  PreviewList;