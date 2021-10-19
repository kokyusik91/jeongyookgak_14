import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

// action type
const SET_CART = 'SET_CART';
const ADD_CART = 'ADD_CART';
const UPDATE_CART = 'UPDATE_CART';
const DELETE_CART = 'DELETE_CART';

// action Creator
const setCart = createAction(SET_CART, (carts) => ({ carts }));
const addCart = createAction(ADD_CART, (carts) => ({ carts }));
const updateCart = createAction(UPDATE_CART, (user) => ({ user }));
const deleteCart = createAction(DELETE_CART, (productId) => ({ productId }));

const initialState = {
  carts_list: [
    {
      id: '0',
      title: '초신선 손질 오징어',
      price: 13800,
      category: '수산',
      count: 1,
      image:
        'https://firebasestorage.googleapis.com/v0/b/jyg-custom-seoul-app/o/frontend%2Fthumbnails%2Ftransparent_background%2Fsquid-fresh-detail.png?alt=media&v=3',
    },

    {
      id: 1,
      image:
        'https://firebasestorage.googleapis.com/v0/b/jyg-custom-seoul-app/o/frontend%2Fthumbnails%2Ftransparent_background%2Fbeeftender-monep-detail.png?alt=media',
      title: '한우 안심 구이용(1+등급)',
      category: '소',
      count: 1,
      price: 34000,
    },

    {
      id: 2,
      image:
        'https://firebasestorage.googleapis.com/v0/b/jyg-custom-seoul-app/o/frontend%2Fthumbnails%2Ftransparent_background%2Fchickef-cut-detail.png?alt=media',
      title: '초신선 닭볶음탕',
      category: '닭',
      count: 1,
      price: 6300,
    },
  ],
};

// middleware

//Reducer
export default handleActions(
  {
    [SET_CART]: (state, action) =>
      produce(state, (draft) => {
        // console.log('리듀서로 들어온', action.payload.carts);
        draft.carts = action.paylod.carts_list;
      }),
    [ADD_CART]: (state, action) =>
      produce(state, (draft) => {
        console.log('리듀서로 넘어온 추가할 데이터', action.payload.carts);
        // console.log(draft.carts_list);
        // console.log(state.carts_list);
        draft.carts_list.push(action.payload.carts);
      }),
  },
  initialState
);

const actionCreators = {
  setCart,
  addCart,
  deleteCart,
};

export { actionCreators };
