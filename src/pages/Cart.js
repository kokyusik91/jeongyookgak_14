/* eslint-disable */

import React, { useEffect } from "react";
import styled from "styled-components";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import data from "../config/data";
import Items from "../components/Items";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as cartActions } from "../redux/modules/cart";

const Cart = () => {
  const carts = useSelector((state) => state.cart.carts_list);
  let all_total_price = useSelector((state) => state.cart.all_total_price);
  const dispatch = useDispatch();

  const gotoShopping = () => {
    history.push("/shopping");
  };

  // 카트페이지에 들어왔을때, 장바구니에 추가한 목록 불러오기
  useEffect(() => {
    if (carts.length === 0) {
      dispatch(cartActions.setCartDB());
    }
  }, []);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  // 쇼핑목록이 있을때
  if (carts.length !== 0) {
    return (
      <React.Fragment>
        <Grid width="60%" margin="100px auto">
          {/* 장바구니 테스트 */}
          <Text color="black" size="32px" textAlign="center">
            장바구니
          </Text>
          {/* 장바구니 정보 */}
          <ShoppingGrid>
            {/* 장바구니 목록 */}
            <GridTable>
              <TitleGrid>
                <Text color="black" size="13px" margin="0 0 0 230px">
                  상품정보
                </Text>
                <Text color="black" size="13px" margin="0 0 0 290px">
                  수량
                </Text>
                <Text color="black" size="13px" margin="0 0 0 120px">
                  가격
                </Text>
              </TitleGrid>
              {/* 상품 목록들 들어감 */}
              <Grid>
                {carts.map((el, index) => {
                  {
                    /* key 값으로 index 넘기지말자 */
                  }
                  return <Items key={el.id} {...el} />;
                })}
              </Grid>
            </GridTable>

            {/* 장바구니 계산 */}
            <GridTable2>
              <BorderBottomGrid>
                <GridPrice>
                  <Text size="15px" color="black">
                    총 상품 금액
                  </Text>
                  <Text size="15px" color="black">
                    {numberWithCommas(all_total_price)}원
                  </Text>
                </GridPrice>
              </BorderBottomGrid>

              <BorderBottomGrid>
                <GridPrice>
                  <Text size="15px" color="black">
                    총 배송비
                  </Text>
                  <Text size="15px" color="black">
                    0 원
                  </Text>
                </GridPrice>
                <SmallGrid>
                  <Text size="13px" color="#e0dedf">
                    기본 배송비
                  </Text>
                  <Text size="13px" color="#e0dedf" margin="0 0 0 20px">
                    2,500원
                  </Text>
                </SmallGrid>
                <SmallGrid>
                  <Text size="13px" color="#4a90e2">
                    첫 구매 무료배송
                  </Text>
                  <Text size="13px" color="#4a90e2">
                    -100%
                  </Text>
                </SmallGrid>
              </BorderBottomGrid>
              <FinalGrid>
                <Text
                  size="13px"
                  color="#4a90e2"
                  margin="10px 0 20px 0"
                  textAlign="center"
                >
                  첫구매 무료배송 혜택이 적용되었습니다.
                </Text>
                <Text size="13px" color="black" textAlign="right" bold>
                  예상 결제 금액
                </Text>
                <Text
                  size="24px"
                  color="#d0021b"
                  margin="0 0 20px 0"
                  textAlign="right"
                  bold
                >
                  {carts.length === 0
                    ? (all_total_price = 0)
                    : numberWithCommas(all_total_price)}
                  원
                </Text>
              </FinalGrid>
              <BuyButton bg="#d0021b">
                <Text
                  bold
                  size="15px"
                  _onClick={() => {
                    window.alert("서비스 준비중 입니다.");
                  }}
                >
                  전체상품 주문하기
                </Text>
              </BuyButton>
              <BuyButton bg="#acacac">
                <Text
                  bold
                  size="15px"
                  _onClick={() => {
                    history.push("/shopping");
                  }}
                >
                  쇼핑계속하기
                </Text>
              </BuyButton>
            </GridTable2>
          </ShoppingGrid>
        </Grid>
      </React.Fragment>
    );
  }
  // 쇼핑목록이 없을때
  else {
    return (
      <React.Fragment>
        <Grid width="80%" margin="100px auto">
          <Text color="black" size="32px" textAlign="center">
            장바구니
          </Text>
          <EmptyGrid>
            <Text
              size="38px"
              color="#e1dedf"
              margin="76px 0 0 0"
              textAlign="center"
            >
              장바구니에 담은 상품이 없습니다.
            </Text>
            <GoButton onClick={gotoShopping}>
              <Text size="16px">쇼핑계속하기</Text>
              <Text size="16px">👉🏻</Text>
            </GoButton>
          </EmptyGrid>
        </Grid>
      </React.Fragment>
    );
  }
};

const GridTable = styled.div`
  border-top: 1px solid black;
  width: 860px;
`;

const GridTable2 = styled.div`
  margin-left: 39px;
  border-top: 1px solid black;
  background-color: #f8f8f8;
  padding: 0 20px 20px 20px;
  width: 280px;
  height: 450px;
`;

const GridPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
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

const ShoppingGrid = styled.div`
  display: inline-flex;
  margin: 45px auto;
`;

const TitleGrid = styled.div`
  display: flex;
  padding: 18px 0;
  border-bottom: 1px solid #e0dedf;
`;

const SmallGrid = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
`;

const BorderBottomGrid = styled.div`
  border-bottom: 1px solid #e0dedf;
  padding: 20px 0;
`;

const FinalGrid = styled.div``;

const BuyButton = styled.button`
  display: block;
  width: 220px;
  height: 50px;
  border: none;
  cursor: pointer;

  ${(props) => (props.bg ? `background-color:${props.bg}` : "")};
  margin: 7px auto;
`;

export default Cart;
