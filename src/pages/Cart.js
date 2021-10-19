import React, { useEffect } from 'react';
import styled from 'styled-components';
import Grid from '../elements/Grid';
import Text from '../elements/Text';
import data from '../config/data';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as cartActions } from '../redux/modules/cart';

const Cart = () => {
  // 더미데이터
  console.log(data);
  const dispatch = useDispatch();
  // 카트페이지에 들어왔을때, 장바구니에 추가한 목록 불러오기
  useEffect(() => {
    dispatch(cartActions.setCart(data));
  }, []);

  return (
    <React.Fragment>
      <Grid
        width='1180px'
        height='509px'
        margin='100px auto 0 auto'
        padding='0 0 100px 0'
        bg='#fff'
      >
        <Text size='36px' textAlign='center' color='black'>
          장바구니
        </Text>

        {/* 장바구니 정보 */}
        <Grid>
          {/* 장바구니 목록 */}
          <Grid></Grid>
          {/* 장바구니 계산 */}
          <Grid></Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Cart;
