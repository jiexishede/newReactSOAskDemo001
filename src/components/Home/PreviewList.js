import React, { Component } from 'react';
import Preview from './Preview'

class PreviewList extends  Component {
  static propTypes = {
    loading:React.PropTypes.bool,              //  注意 bushi PropTypes.bool,  前面要价 React
    error:React.PropTypes.bool,
    articleList: React.PropTypes.arrayOf(React.PropTypes.object),
    loadArticles: React.PropTypes.func
  };

  constructor(){
    super();

    this.stateCount = 1;
  }

  componentDidMount(){
    this.props.loadArticles();
    console.log('action===============');

  }

  render(){
    const { loading, error, articleList } = this.props;
       this.stateCount = this.stateCount + 1;

    console.log("stateCount===", this.stateCount);

    if(error){
      return <p className="message">)0ops, something is wrong.This.stateCount==={this.stateCount} </p>
    }
    if(loading){
      return <p className="message">Loading.... This.stateCount==={this.stateCount}</p>
    }

    // return this.props.articleList.map(item => (
    //     <Preview {...item} key={item.id}/>
    // ))

    return (
        <div>
          This.stateCount==={this.stateCount}
          {articleList.map(item => {
            return <Preview {...item} key={item.id} push={this.props.push} />
          })}
        </div>
    );

  }
}

export  default  PreviewList;