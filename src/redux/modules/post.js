import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";
import axios from "axios";

//액션 타입
const SET_POST = "SET_POST";

//액션 생성함수

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));

//초기값

const initialState = {
  list: [
    {
      id: "id",
      category: "육류",
      title: "고기",
      price: 10000,
      image:
        "https://img.huffingtonpost.com/asset/602c66fc240000ae01cbc1e2.jpeg?cache=YXkQIJs6ue&ops=1778_1000",
    },

    {
      id: "id2",
      category: "과일",
      title: "사과",
      price: 8000,
      image: "https://cdn.mkhealth.co.kr/news/photo/202010/50970_51164_4758.jpg",
    },
  ],
};

//미들웨어

const getPostDB = () => {
  return (dispatch) => {
    apis
      .get() // 헤더 포함되어있음
      .then((res) => {
        console.log(res.data.products);
        // const post_list = res.data.product;
        // dispatch(setPost(post_list));
      });
  };
};

//리듀서
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        // draft.list = action.payload.post_list
        // console.log(state)
        // console.log(action)
        // console.log(action.payload)
      }),
  },
  initialState
);

const actionCreators = {
  setPost,

  getPostDB,
};

export { actionCreators };
