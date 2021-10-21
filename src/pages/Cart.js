/* eslint-disable */

import React, { useEffect } from 'react';
import styled from 'styled-components';
import Grid from '../elements/Grid';
import Text from '../elements/Text';
import data from '../config/data';
import Items from '../components/Items';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../redux/configureStore';
import { actionCreators as cartActions } from '../redux/modules/cart';

const Cart = () => {
  const carts = useSelector((state) => state.cart.carts_list);
  const all_total_price = useSelector((state) => state.cart.all_total_price);
  const dispatch = useDispatch();

  const gotoShopping = () => {
    history.push('/shopping');
  };

  // 카트페이지에 들어왔을때, 장바구니에 추가한 목록 불러오기
  useEffect(() => {
    if (carts.length === 0) {
      dispatch(cartActions.setCartDB());
    }
  }, []);

  // 쇼핑목록이 있을때
  if (carts.length !== 0) {
    return (
      <React.Fragment>
        <Grid
          width='1180px'
          height='100vh'
          margin='100px auto 0 auto'
          padding='0 0 100px 0'
          bg='#fff'
        >
          <Grid height='26px'>
            <Text size='32px' textAlign='center' color='black'>
              장바구니
            </Text>
          </Grid>

          {/* 장바구니 정보 */}
          <Grid is_flex>
            {/* 장바구니 목록 */}
            <GridTable>
              <Grid is_flex>
                <Text color='black'>상품정보</Text>
                <Text color='black'>수량</Text>
                <Text color='black'>가격</Text>
              </Grid>
              {/* 상품 목록들 들어감 */}
              <Grid>
                {carts.map((el, index) => {
                  return <Items key={index} {...el} />;
                })}
              </Grid>
            </GridTable>

            {/* 장바구니 계산 */}
            <GridTable2>
              <Grid width='220px' margin='0 auto' padding='5px'>
                <GridPrice>
                  <Text size='15px' color='black'>
                    총 상품 금액
                  </Text>
                  <Text size='15px' color='black'>
                    {all_total_price}
                  </Text>
                </GridPrice>
              </Grid>
            </GridTable2>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
  // 쇼핑목록이 없을때
  else {
    return (
      <React.Fragment>
        <Grid width='80%' margin='100px auto'>
          <Text color='black' size='32px' textAlign='center'>
            장바구니
          </Text>
          <EmptyGrid>
            <Text
              size='38px'
              color='#e1dedf'
              margin='76px 0 0 0'
              textAlign='center'
            >
              장바구니에 담은 상품이 없습니다.
            </Text>
            <GoButton onClick={gotoShopping}>
              <Text size='16px'>쇼핑계속하기</Text>
              <Text size='16px'>👉🏻</Text>
            </GoButton>
          </EmptyGrid>
        </Grid>
      </React.Fragment>
    );
  }
};

const GridTable = styled.div`
  width: 100%;
  margin-top: 51px;
  border-top: 1px solid black;
`;

const GridTable2 = styled.div`
  width: 280px;
  height: 401px;
  margin: 0 auto;
  color: black;
  margin-top: 51px;
  margin-left: 39px;
  background-color: #f8f8f8;
  border-top: 1px solid black;
  padding-bottom: 30px;
  box-sizing: border-box;
`;

const GridPrice = styled.div`
  padding: 10px;
  border-bottom: 1px solid #f8f8f8;
  display: flex;
  justify-content: space-between;
`;

const EmptyGrid = styled.div`
  width: 80vw;
  margin: 52px auto;
  border-top: 1px solid black;
  border-bottom: 1px solid grey;
`;

const GoButton = styled.button`
  background-color: black;
  width: 260px;
  height: 70px;
  display: block;
  margin: 30px auto 60px auto;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default Cart;
