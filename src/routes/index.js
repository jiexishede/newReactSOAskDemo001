
import React from "react";
import { Router, Route, IndexRoute } from "react-router";

import  Frame from '../layouts/Frame'
import  Home from "../views/Home";
import Detail from  "../views/Detail";

const  routes = hashHistory => (
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





//  book  实例
// import React from 'react';
// import { Router, Route, IndexRoute } from 'react-router';
//
// import Frame from '../layouts/Frame';
// import Home from '../views/Home';
// import Detail from '../views/Detail';
//
// const routes = browserHistory => (
//     <Router history={browserHistory}>
//       <Route path="/" component={Frame}>
//         <IndexRoute component={Home} />
//         <Route path="/detail/:id" component={Detail} />
//       </Route>
//     </Router>
// );
//
// export default routes;
