import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";
import axios from "axios";

//액션 타입
const SET_POST = "SET_POST";
const SET_CATEGORY = "SET_CATEGORY"

//액션 생성함수

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const setCategory = createAction(SET_CATEGORY, (category_list) => ({ category_list }));

//초기값

const initialState = {
  list: [],
  category_list:[],
};

//미들웨어

const getPostDB = () => {
  return (dispatch) => {
    apis
      .get() // 헤더 포함되어있음
      .then((res) => {
        // console.log(res.data.products);
        const post_list = res.data.products;
        dispatch(setPost(post_list));
      });
  };
};

//미들웨어
const getCategoryDB = (category) => {
  return (dispatch) => {
    // console.log(category)
    apis
      .get(`api/list?category=${category}`)
         // 헤더 포함되어있음
      .then((res) => {
        // console.log(res.data.products);
        const category_list = res.data.products;
        dispatch(setCategory(category_list));
      });
  };
};

//리듀서
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
      [SET_CATEGORY]: (state, action) =>
      produce(state, (draft) => {
        draft.category_list = action.payload.category_list;
      }),
  },
  initialState
);

const actionCreators = {
  setPost,

  getPostDB,
  getCategoryDB,
};

export { actionCreators };
