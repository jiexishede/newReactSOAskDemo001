import  { createStore, combineReducers, compose, applyMiddleware } from  'redux';
// 注意, 没有加载 'redux' 模块, 这个 以上所有的 模块都不会被加载. 函数 会报错,执行的时候,提示这个函数, 1, 没有加载,2 函数名称错误. .  切记.
import { routerReducer } from 'react-router-redux'
import ThunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import DevTools from './DevTools'
import createFetchMiddleware from 'redux-composable-fetch'

//  创建一个请求 middleware 的示例

const FetchMiddleware = createFetchMiddleware({
  afterFetch({ action, result }) {
    return result.json().then(data => {
      return Promise.resolve({
        action,
        result: data,
      });
    });
  },
});


const finalCreateStore = compose(
    applyMiddleware(
        ThunkMiddleware,
        // 将 请求的 middleware 注入  store  增强器中
        FetchMiddleware
    ),
    DevTools.instrument()
)(createStore);


//  homeRedux.  combineReducers   这个函数 返回的是一个对象.  查 Dash
const reducer = combineReducers(Object.assign({}, rootReducer, {

  routing: routerReducer,
})) ;

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);

  return store;
}



