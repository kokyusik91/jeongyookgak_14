/* eslint-disable */

import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

// action type
const SET_CART = "SET_CART";
const ADD_CART = "ADD_CART";
const UPDATE_CART = "UPDATE_CART";
const DELETE_CART = "DELETE_CART";
const PLUS_PRICE = "PLUS_PRICE";
const MINUS_PRICE = "MINUS_PRICE";

// action Creator
const setCart = createAction(SET_CART, (carts_list, total_price) => ({
  carts_list,
  total_price,
}));
//카트에 목록 추가
const addCart = createAction(ADD_CART, (item) => ({ item }));
const updateCart = createAction(UPDATE_CART, (price) => ({
  price,
}));
const deleteCart = createAction(DELETE_CART, (cartId) => ({ cartId }));
const plusPrice = createAction(PLUS_PRICE, (data) => ({
  data,
}));
const minusPrice = createAction(MINUS_PRICE, (data) => ({
  data,
}));

const initialState = {
  carts_list: [],
  all_total_price: 0,
};

const setCartDB = () => {
  return async function (dispatch, getState) {
    try {
      const res = await apis.get("api/cart");

      // 장바구니에 담긴 모든 리스트들의 총 가격 (얼마나왔는지?).
      const total_price = res.data[0].totalPrice;
      //장바구니에 추가된 목록 리스트배열.
      const carts_list = res.data[1].carts;
      dispatch(setCart(carts_list, total_price));
    } catch (e) {
      console.log("error :::::: ", e);
    }
  };
};
// 서버에 수량추가한 데이터 요청
const addCartDB = (id, count) => {
  const product_info = {
    productId: id,
    count: count,
  };
  return (dispatch, { history }, getState) => {
    apis
      .create(product_info)
      .then((res) => {
        // 추가한 데이터
        window.alert("장바구니에 추가 되었습니다. 장바구니를 확인해주세요!");

        // 추가한 데이터의 총가격

        const item = {
          ...res.data[0].cart,
          count: count,
        };

        //item은 데이터베이스에서 추가한 데이터를 응답받은 데이터
        dispatch(addCart(item));
        console.log("응답 성공");
      })
      .catch((error) => {
        console.log(error, "장바구니 추가실패");
      });
  };
};

// delete method
const deleteCartDB = (Id) => {
  return async function (dispatch, getState) {
    // 확인
    console.log("미들웨어로 넘어온 productId", Id);
    try {
      const res = await apis.delete(`api/cart/${Id}`);
      console.log("삭제한후 서버 응답데이터", res);
      // 이거 카트아이디임.
      dispatch(deleteCart(Id));
    } catch (e) {
      console.log("error :::::: ", e);
    }
  };
};

const plusCartDB = (data) => {
  console.log("미들웨어", data);
  return async function (dispatch, getState) {
    try {
      const res = await apis.put(`api/cart`, data);

      dispatch(plusPrice(data));
    } catch (e) {
      console.log("error :::::: ", e);
    }
  };
};

const minusCartDB = (data) => {
  return async function (dispatch, getState) {
    try {
      const res = await apis.put(`api/cart`, data);

      dispatch(minusPrice(data));
    } catch (e) {
      console.log("error :::::: ", e);
    }
  };
};

//Reducer
export default handleActions(
  {
    [SET_CART]: (state, action) =>
      produce(state, (draft) => {
        // 장바구니 목록에 추가된 아이템들을 State에 저장.
        draft.carts_list = action.payload.carts_list;
        // 장바구니에 들어있는 아이템들의 총가격 (그래서 얼마나왔는지)
        draft.all_total_price = action.payload.total_price;
      }),

    [ADD_CART]: (state, action) =>
      produce(state, (draft) => {
        // 리듀서에서 카트목록 추가, 이미 같은 아이디 항목이 있으면 수량만 추가 적용.
        // (여기서 id는 DB에 저장되있는 카트 테이블의 id 기존에의 포스트 아이디랑 다름.)
        let index = state.carts_list.findIndex((el) => {
          return el.id === action.payload.item.id;
        });
        if (index >= 0) {
          draft.carts_list[index].count =
            draft.carts_list[index].count + action.payload.item.count;
        } else {
          // 카트목록에 아이템 추가 (id:201, productId:3)
          // 장바구니 추가한 목록이 draft에 올라감.
          draft.carts_list.push(action.payload.item);
        }
        // 전역에있는 상품 총 가격은 기존 최종 가격에 추가한 항목의 수량 * 가격을 더한다.
        draft.all_total_price =
          draft.all_total_price +
          action.payload.item.count * action.payload.item.price;
      }),
    [DELETE_CART]: (state, action) =>
      produce(state, (draft) => {
        console.log("리듀서로 넘어온 productID", action.payload.cartId);
        let newArrays = state.carts_list.filter((el) => {
          console.log("아이디비교", el.id, action.payload.cartId);
          return el.id !== action.payload.cartId;
        });

        // 데이터베이스에서 삭제한 목록 {} 형식임.
        let array = state.carts_list.find((el) => {
          return el.id === action.payload.cartId;
        });

        console.log("삭제후 남은 어레이", newArrays);
        draft.carts_list = newArrays;
        console.log("deleteReducer", array);
        draft.all_total_price =
          draft.all_total_price - array.count * array.price;
      }),
    [PLUS_PRICE]: (state, action) =>
      produce(state, (draft) => {
        const index = state.carts_list.findIndex((el) => {
          return el.id === action.payload.data.cartId;
        });
        draft.carts_list[index] = {
          ...draft.carts_list[index],
          count: action.payload.data.count,
          price: action.payload.data.price,
        };

        draft.all_total_price =
          draft.all_total_price + action.payload.data.price;
      }),
    [MINUS_PRICE]: (state, action) =>
      produce(state, (draft) => {
        const index = state.carts_list.findIndex((el) => {
          return el.id === action.payload.data.cartId;
        });
        draft.carts_list[index] = {
          ...draft.carts_list[index],
          count: action.payload.data.count,
          price: action.payload.data.price,
        };
        draft.all_total_price =
          draft.all_total_price - action.payload.data.price;
      }),
  },
  initialState
);

const actionCreators = {
  setCart,
  addCart,
  deleteCart,
  plusPrice,
  minusPrice,
  setCartDB,
  addCartDB,
  deleteCartDB,
  plusCartDB,
  minusCartDB,
};

export { actionCreators };
