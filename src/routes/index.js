
import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import  Frame from '../layouts/Frame'
import  Home from "../views/Home";
import Detail from  "../views/Detail";

const  routes = (
    <Router history={ hashHistory }>
      <Route path="/" component={Frame }>
        <IndexRoute component={Home}/>
        <Route path="/detail/:id" component={Detail} />
      </Route>
    </Router>
)

// ReactDOM.render(): Invalid component element.
// 你没有导出的话主页 路由拿不到的.
export default routes;

