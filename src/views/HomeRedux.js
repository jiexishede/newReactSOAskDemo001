
import { combineReducer } from  'redux';

// 引入 reducer 及 actionCreator

import list from '../components/Home/PreviewListRedux';

export default combineReducer({
  list,
});

export * as listAction from "../components/Home/PreviewListRedux"