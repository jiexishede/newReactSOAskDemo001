import  { createStore, combineReducers, compose, applymiddleware } from  'redux';
import { routerReducer } from 'react-router-redux';
import Thunkmiddleware from 'redux-thunk';
import rootReducer from './reducers';
const finalCreateStore = compose(
    applymiddleware(ThunkMiddleware)
)(createStore);
const reducer = combineReducers(Object.assign({}, rootReducer, {
  routing: routerReducer,
})) ;

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);

  return store;
}