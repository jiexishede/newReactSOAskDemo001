/// 当 传入 state 为 空时, state 将使用 initialState 的值.

const initialState = {
  loading:true,
  error:false,
  articleList:[],
};

//  constants: 部分;;
const LOAD_ARTICLES = "LOAD_ARTICLES";
const LOAD_ARTICLES_SUCCESS = "LOAD_ARTICLES_SUCCESS";
const LOAD_ARTICLES_ERROR = "LOAD_ARTICLES_ERROR";

/// action creator    //   发射方     每次 调用 loadArticles 都会生成一个 action.
export function loadArticles() {
  return {
    // types:[LOAD_ARTICLES, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_ERROR],
    type:LOAD_ARTICLES,
    url:'./api/articles.json',
  };
}

//  reducers  // 接收方            响应方
function previewList(state = initialState, action) {
  switch (action.type) {
    case LOAD_ARTICLES:{
      return {
          ...state,
        loading:true,
        error:false,
      };
    }
    case LOAD_ARTICLES_SUCCESS: {
      return {
          ...state,
        loading:false,
        error:false,
        articleList:action.payload.articleList,
      };
    }
    case LOAD_ARTICLES_ERROR: {
      return {
          ...state,
          loading:false,
          error: true,
      };
    }

    default:
      return state;
  }
}

export  default  previewList;