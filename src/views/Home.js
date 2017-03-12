import React, { Component } from 'react';
import { bindAcionCreators } from 'redux';
import { connect } from "react-redux";
import PreviewList from "../components/Home/PreviewList"
import { listActions } from './HomeRedux'

class Home extends Component {
  render() {
    return (
     <div>
      <h1>home</h1>
       <PreviewList
           {...this.props.list}
           {...this.props.listActions}
       />
     </div>
    );
  }
}

export default  connect( state => {
    return {
      list:state.home.list,
    };
  },dispath => {
    return {
      listActions: bindAcionCreators(listActions, dispath),
    };
})(Home);

export  default  Home;