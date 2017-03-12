
import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from "./redux/configureStore";
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';
import routes from "./routes";

import DevTools from './redux/DevTools';


const store = configureStore();
const history = syncHistoryWithStore( hashHistory, store );


// ReactDOM.render(routes, document.getElementById('root'));

//
// ReactDOM.render(
//     <Provider store={store}>
//       {routes(history)}
//     </Provider>, document.getElementById('root')
// );

//  render 后面要加两个 括号.

                                        ///  注意 假如 devtools 外面加 div  单一标签.


ReactDOM.render((
        <Provider store={store}>
         <div>
           {routes(history)}
           <DevTools />
         </div>

        </Provider>)
    , document.getElementById('root')
);

