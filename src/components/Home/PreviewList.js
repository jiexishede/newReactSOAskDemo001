import React, { Component } from 'react';
import Preview from './Preview'

class PreviewList extends  Component {
  static propTypes = {
    loading:React.PropTypes.bool,              //  注意 bushi PropTypes.bool,  前面要价 React
    error:React.PropTypes.bool,
    articleList: React.PropTypes.arrayOf(React.PropTypes.object),
    loadArticles: React.PropTypes.func
  };

  constructor(props){
    //The constructor for a React component is called before it is mounted. When implementing the constructor for a React.
    // Component subclass, you should call super(props) before any other statement.
    // Otherwise, this.props will be undefined in the constructor, which can lead to bugs.

    // The constructor is the right place to initialize state. If you don't initialize state and you don't bind
    // methods, you don't need to implement a constructor for your React component.
    super(props);
    this.stateCount = 1;
    this.articleList = [];
  }

  componentWillReceiveProps(nextProps){
    this.setState(
        {articleList: nextProps.articleList},
    );
  }


  componentDidMount(){
    this.props.loadArticles();
  }

  render(){
    const { loading, error, articleList } = this.props;
       this.stateCount = this.stateCount + 1;

    if(error){
      return <p className="message">)0ops, something is wrong. </p>
    }
    if(loading){
      return <p className="message">Loading.... </p>
    }

    return (
        <div>
          {this.state.articleList.map(item => {
            return <Preview {...item} key={item.id} push={this.props.push} />
          })}
        </div>
    );

  }
}

export  default  PreviewList;