/* eslint-disable */

import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../shared/axios';

// action type
const SET_CART = 'SET_CART';
const ADD_CART = 'ADD_CART';
const UPDATE_CART = 'UPDATE_CART';
const DELETE_CART = 'DELETE_CART';
const PLUS_PRICE = 'PLUS_PRICE';
const MINUS_PRICE = 'MINUS_PRICE';

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
const deleteCart = createAction(DELETE_CART, (productId) => ({ productId }));
const plusPrice = createAction(PLUS_PRICE, (price) => ({
  price,
}));
const minusPrice = createAction(MINUS_PRICE, (price) => ({
  price,
}));

const initialState = {
  carts_list: [],
  all_total_price: 0,
};

// middleware
// const plusPriceFB = (id) => {
//   return function (dispatch, getState) {
//     const cart = getState().cart.carts_list;
//     console.log('미들웨어에서 getState로 받아온', cart);
//     console.log('item 컴포넌트에서 받아온 id', id);
//     const cart_item = cart.find((el) => {
//       return el.id === id;
//     });
//     const updateCart_item = {
//       ...cart_item,
//       count: cart_item.count + 1,
//       total_price: cart_item.price * (cart_item.count + 1),
//       all_total_price: cart_item.price * (cart_item.count + 1),
//     };
//     dispatch(plusPrice(updateCart_item));
//   };
// };

// const minusPriceFB = (id) => {
//   return function (dispatch, getState) {
//     const cart = getState().cart.carts_list;
//     console.log('미들웨어에서 getState로 받아온', cart);
//     console.log('item 컴포넌트에서 받아온 id', id);
//     const cart_item = cart.find((el) => {
//       return el.id === id;
//     });
//     const updateCart_item = {
//       ...cart_item,
//       count: cart_item.count - 1,
//       total_price: cart_item.price * (cart_item.count - 1),
//     };
//     dispatch(minusPrice(updateCart_item));
//   };
// };
const setCartDB = () => {
  return async function (dispatch, getState) {
    try {
      const res = await apis.get('api/cart');
      console.log('서버에 get 요청후 불러온 데이터들', res);
      // 받아온 데이터 : 상품전체 가격, 이때까지 뭐샀는지,
      // console.log(res.data[0].totalPrice);
      // console.log(res.data[1].carts);
      //데이터 조작을 해서 리듀서로 값을 넘겨 줘야하나?
      const total_price = res.data[0].totalPrice;
      const carts_list = res.data[1].carts;
      dispatch(setCart(carts_list, total_price));
    } catch (e) {
      console.log('error :::::: ', e);
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
        alert(
          '지금까지 산 이품목의 갯수는 ' + res.data[0].cart.count + '입니다.'
        );
        alert(
          '지금까지 산 이품목의 누적가격은 ' +
            res.data[0].cart.sumPrice +
            '입니다.'
        );
        console.log(res.data[0]);
        // 추가한 데이터의 총가격
        console.log(res.data[1]);
        const item = {
          ...res.data[0].cart,
          id: parseInt(id),
          count: count,
        };
        console.log('리듀서 cart_list에 넣을 데이터 형식', item);
        dispatch(addCart(item));
        console.log('응답 성공');
      })
      .catch((error) => {
        console.log(error, '장바구니 추가실패');
      });
  };
};

// delete method
const deleteCartDB = (productId) => {
  return async function (dispatch, getState) {
    // 확인
    console.log('미들웨어로 넘어온 productId', productId);
    try {
      const res = await apis.delete(`api/cart/${productId}`);
      console.log(res);
      dispatch(deleteCart(productId));
    } catch (e) {
      console.log('error :::::: ', e);
    }
  };
};

const plusCartDB = (data) => {
  return async function (dispatch, getState) {
    try {
      const res = await apis.put(`api/cart`, data);
      console.log(res.data[0].totalPrice);
      // const array = getState().cart.carts_list;
      // const product = array.find((el) => el.id === data.productId);
      // if (product.count < data.count) {
      dispatch(plusPrice(data.price));
      // } else {
      //   dispatch(minusPrice(data.price));
      // }
    } catch (e) {
      console.log('error :::::: ', e);
    }
  };
};

const minusCartDB = (data) => {
  return async function (dispatch, getState) {
    try {
      const res = await apis.put(`api/cart`, data);
      console.log(res.data[0].totalPrice);
      // const array = getState().cart.carts_list;
      // const product = array.find((el) => el.id === data.productId);
      // if (product.count < data.count) {
      dispatch(minusPrice(data.price));
      // } else {
      //   dispatch(minusPrice(data.price));
      // }
    } catch (e) {
      console.log('error :::::: ', e);
    }
  };
};

//Reducer
export default handleActions(
  {
    [SET_CART]: (state, action) =>
      produce(state, (draft) => {
        draft.carts_list = action.payload.carts_list;
        draft.all_total_price = action.payload.total_price;
      }),
    // 카트목록 추가 이미 항목이 있으면 s수량만 추가 적용
    [ADD_CART]: (state, action) =>
      produce(state, (draft) => {
        console.log('리듀서', action.payload.item);
        let index = draft.carts_list.findIndex((el) => {
          return el.id === action.payload.item.id;
        });
        if (index >= 0) {
          draft.carts_list[index].count =
            draft.carts_list[index].count + action.payload.item.count;
        } else {
          draft.carts_list.push(action.payload.item);
        }
        draft.all_total_price =
          draft.all_total_price +
          action.payload.item.count * action.payload.item.price;
      }),
    [DELETE_CART]: (state, action) =>
      produce(state, (draft) => {
        console.log('리듀서로 넘어온 productID', action.payload.productId);
        let newArray = draft.carts_list.filter((el) => {
          return el.id !== action.payload.productId;
        });
        let array = state.carts_list.find((el) => {
          return el.id === action.payload.productId;
        });
        draft.carts_list = newArray;
        console.log('deleteReducer', array);
        draft.all_total_price =
          draft.all_total_price - array.count * array.price;
      }),
    [PLUS_PRICE]: (state, action) =>
      produce(state, (draft) => {
        draft.all_total_price = draft.all_total_price + action.payload.price;
      }),
    [MINUS_PRICE]: (state, action) =>
      produce(state, (draft) => {
        draft.all_total_price = draft.all_total_price - action.payload.price;
      }),

    // [PLUS_PRICE]: (state, action) =>
    //   produce(state, (draft) => {
    //     const index = draft.carts_list.findIndex((el) => {
    //       return el.id === action.payload.updateCart_item.id;
    //     });
    //     draft.carts_list[index] = action.payload.updateCart_item;
    //     draft.all_total_price =
    //       draft.all_total_price + Number(action.payload.updateCart_item.price);
    //     // total price를 또
    //   }),
    // [MINUS_PRICE]: (state, action) =>
    //   produce(state, (draft) => {
    //     const index = draft.carts_list.findIndex((el) => {
    //       return el.id === action.payload.updateCart_item.id;
    //     });
    //     draft.carts_list[index] = action.payload.updateCart_item;
    //     draft.all_total_price =
    //       draft.all_total_price - Number(action.payload.updateCart_item.price);
    //   }),
    // [TOTAL_PRICE]: (state, action) => {
    //   produce(state, (draft) => {
    //     console.log('총 합구하러 가즈아!!!');
    //     let array = [];
    //     draft.carts_list.forEach((el) => {
    //       array.push(el.total_price);
    //     });
    //     // console.log('리듀서', array);
    //     const result = array.reduce(function add(sum, currValue) {
    //       return sum + currValue;
    //     }, 0);
    //     draft.total_Price = result;
    //   });
    // },
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
