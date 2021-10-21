// import { createAction, handleActions } from 'redux-actions';
// import { produce } from 'immer';

// // action type
// const SET_CART = 'SET_CART';
// const ADD_CART = 'ADD_CART';
// const UPDATE_CART = 'UPDATE_CART';
// const DELETE_CART = 'DELETE_CART';
// const PLUS_PRICE = 'PLUS_PRICE';
// const MINUS_PRICE = 'MINUS_PRICE';
// const TOTAL_PRICE = 'PLUS_PRICE';

// // action Creator
// const setCart = createAction(SET_CART, () => ({}));
// const addCart = createAction(ADD_CART, (carts) => ({ carts }));
// const updateCart = createAction(UPDATE_CART, (totalPrice_list) => ({
//   totalPrice_list,
// }));
// const deleteCart = createAction(DELETE_CART, (productId) => ({ productId }));
// const plusPrice = createAction(PLUS_PRICE, (updateCart_item) => ({
//   updateCart_item,
// }));
// const minusPrice = createAction(MINUS_PRICE, (updateCart_item) => ({
//   updateCart_item,
// }));
// const totalPrice = createAction(TOTAL_PRICE, () => ({}));

// const initialState = {
//   carts_list: [],
//   all_total_price: 0,
// };

// // middleware
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

// //Reducer
// export default handleActions(
//   {
//     [SET_CART]: (state, action) =>
//       produce(state, (draft) => {
//         // console.log('리듀서로 들어온', action.payload.carts);
//         draft.carts_list = draft.carts_list;
//       }),
//     [ADD_CART]: (state, action) =>
//       produce(state, (draft) => {
//         let index = draft.carts_list.findIndex((el) => {
//           return el.id === action.payload.carts.id;
//         });
//         if (index >= 0) {
//           draft.carts_list[index].count =
//             draft.carts_list[index].count + action.payload.carts.count;
//         } else {
//           draft.carts_list.push(action.payload.carts);
//           draft.all_total_price =
//             draft.all_total_price + action.payload.carts.total_price;
//         }
//       }),
//     [DELETE_CART]: (state, action) =>
//       produce(state, (draft) => {
//         let newArray = draft.carts_list.filter((el) => {
//           return el.id !== action.payload.productId;
//         });
//         let array = draft.carts_list.find((el) => {
//           return el.id === action.payload.productId;
//         });
//         draft.carts_list = newArray;
//         draft.all_total_price = draft.all_total_price - array.total_price;
//       }),
//     [PLUS_PRICE]: (state, action) =>
//       produce(state, (draft) => {
//         const index = draft.carts_list.findIndex((el) => {
//           return el.id === action.payload.updateCart_item.id;
//         });
//         draft.carts_list[index] = action.payload.updateCart_item;
//         draft.all_total_price =
//           draft.all_total_price + Number(action.payload.updateCart_item.price);
//         // total price를 또
//       }),
//     [MINUS_PRICE]: (state, action) =>
//       produce(state, (draft) => {
//         const index = draft.carts_list.findIndex((el) => {
//           return el.id === action.payload.updateCart_item.id;
//         });
//         draft.carts_list[index] = action.payload.updateCart_item;
//         draft.all_total_price =
//           draft.all_total_price - Number(action.payload.updateCart_item.price);
//       }),
//     // [TOTAL_PRICE]: (state, action) => {
//     //   produce(state, (draft) => {
//     //     console.log('총 합구하러 가즈아!!!');
//     //     let array = [];
//     //     draft.carts_list.forEach((el) => {
//     //       array.push(el.total_price);
//     //     });
//     //     // console.log('리듀서', array);
//     //     const result = array.reduce(function add(sum, currValue) {
//     //       return sum + currValue;
//     //     }, 0);
//     //     draft.total_Price = result;
//     //   });
//     // },
//   },
//   initialState
// );

// const actionCreators = {
//   setCart,
//   addCart,
//   deleteCart,
//   updateCart,
//   plusPrice,
//   plusPriceFB,
//   minusPriceFB,
//   totalPrice,
//   // plusPrice,
//   // minusPrice,
// };

// export { actionCreators };
