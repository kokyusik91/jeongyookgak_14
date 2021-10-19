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
  carts: [
    {
      id: '90',
      titie: '초신선 돼지 목살 구이용',
      price: 16800,
      category: '돼지',
      image:
        'https://firebasestorage.googleapis.com/v0/b/jyg-custom-seoul-app/o/frontend%2Fthumbnails%2Ftransparent_background%2Fporkneck-fresh-detail.png?alt=media',
    },
    {
      id: '91',
      titie: '초신선 돼지 목살 구이용',
      price: 19800,
      category: '돼지',
      image:
        'https://firebasestorage.googleapis.com/v0/b/jyg-custom-seoul-app/o/frontend%2Fthumbnails%2Ftransparent_background%2Fsoysauced-porkneck-detail.png?alt=media',
    },
    {
      id: '93',
      titie: '초신선 손질 오징어',
      price: 13800,
      category: '수산',
      image:
        'https://firebasestorage.googleapis.com/v0/b/jyg-custom-seoul-app/o/frontend%2Fthumbnails%2Ftransparent_background%2Fsquid-fresh-detail.png?alt=media&v=3',
    },
  ],
};

// middleware

//Reducer
export default handleActions(
  {
    [SET_CART]: (state, action) =>
      produce(state, (draft) => {
        draft.carts = action.paylod;
      }),
    [ADD_CART]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  setCart,
  addCart,
  deleteCart,
};

export { actionCreators };
