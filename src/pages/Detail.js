/* eslint-disable */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Grid from "../elements/Grid2";
import Text from "../elements/Text";
import { useParams } from "react-router-dom";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { apis } from "../shared/axios";
import { actionCreators as cartActions } from "../redux/modules/cart";

const Detail = (props) => {
  const { history } = props;
  const [count, setCount] = useState(1);
  // 서버에서 받아온 데이터
  const [item, setItem] = useState({});
  const dispatch = useDispatch();
  const params = parseInt(useParams().id);
  // 로그인 상태 불러오기
  const is_login = useSelector((state) => state.user.user.isLogin);

  useEffect(async () => {
    try {
      const res = await apis.get(`api/detail?productId=${params}`);
      setItem(res.data);
    } catch (e) {
      console.log("error ? :::::: ", e);
    }
  }, []);

  // 서버에서 받아온 데이터를 state에 저장.
  const product_list = item;
  const productId = item.id;
  const productCount = count;

  // 리덕스에 장바구니 목록 추가 해보기
  const addCartRequest = () => {
    if (is_login) {
      dispatch(cartActions.addCartDB(productId, productCount));
    } else {
      alert("로그인을 해주세요!");
      history.push("/Login");
    }

    // 스피너 들어가야함
  };
  const countMinus = () => {
    if (count < 2) {
      return;
    } else setCount(count - 1);
  };
  const countPlus = () => {
    setCount(count + 1);
  };

  return (
    <Grid>
      {/* 상품 담기 */}
      <Grid padding="0 0 50px 0">
        <Grid
          width="980px"
          padding="60px 0 0 0"
          margin="0 auto"
          aligns="center"
          is_flex
        >
          <Grid>
            <ImageDiv
              width="500px"
              margin="0 70px 0 30px"
              src={product_list.image}
            />
          </Grid>
          <Grid width="380px" height="500px">
            <Text size="28px">{product_list.title}</Text>
            <Text size="16px" color="#9b9b9b" margin="20px 0 0 0">
              100g당 3,300원
            </Text>
            <Text size="24px" margin="6px 0 0 0">
              기준가 {product_list.price}원 (900g)
            </Text>
            <Hr></Hr>
            <Grid
              width="100%"
              margin="29px 0 0 0"
              is_flex
              justify="space-around"
            >
              <Text size="18px">옵션</Text>
              <Button
                width="317px"
                height="50px"
                margin="0 0 0 27px"
                bgcolor="transparent"
                border="1px solid #7c7c7c"
              >
                보통 16mm
              </Button>
            </Grid>

            <Grid
              width="100%"
              margin="29px 0 0 0"
              is_flex
              justify="space-around"
            >
              <Text size="18px">수량</Text>
              <Grid
                width="317px"
                height="50px"
                margin="0 0 0 27px"
                bgcolor="transparent"
                is_flex
              >
                <Button
                  width="50px"
                  height="50px"
                  bgcolor="transparent"
                  border="1px solid #7c7c7c"
                  onClick={countMinus}
                >
                  -
                </Button>
                <Grid
                  width="100%"
                  height="50px"
                  is_flex
                  justify="center"
                  aligns="center"
                  border="1px solid #7c7c7c"
                >
                  <Text>{count}</Text>
                </Grid>
                <Button
                  width="50px"
                  height="50px"
                  bgcolor="transparent"
                  border="1px solid #7c7c7c"
                  margin="0px"
                  onClick={countPlus}
                >
                  +
                </Button>
              </Grid>
            </Grid>
            <Grid margin="40px 0 0 0" is_flex>
              <Button
                width="180px"
                height="60px"
                bgcolor="#888"
                onClick={() => {
                  window.alert("서비스 준비중 입니다.");
                }}
              >
                <Text>바로구매</Text>
              </Button>
              <Button
                width="180px"
                height="60px"
                bgcolor="#d0021b"
                onClick={addCartRequest}
                margin="0 0 0 20px"
              >
                <Text>장바구니 추가</Text>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* 상품설명, 상품리뷰, 상품정보안내 */}
      <Grid width="100%" height="109px" bg="#fff">
        <Grid width="360px" bg="#fff" is_flex margin="0 auto">
          <Text color="#1c1c1c" margin="45px 63.5px 0 0" size="18px">
            상품설명
          </Text>
          <Text color="#1c1c1c" margin="45px 63.5px 0 0" size="18px">
            상품리뷰
          </Text>
          <Text color="#1c1c1c" margin="45px 0 0 0" size="18px">
            상품정보안내
          </Text>
        </Grid>
      </Grid>
      <hr />

      <ImageDiv
        width="100%"
        src="https://firebasestorage.googleapis.com/v0/b/jyg-custom-seoul-app/o/frontend%2Fdescriptions%2Fweb%2Fporkbelly-clean1.png?alt=media"
      />

      <ImageDiv
        width="100%"
        src="https://firebasestorage.googleapis.com/v0/b/jyg-custom-seoul-app/o/frontend%2Fdescriptions%2Fweb%2Fporkbelly-clean2.png?alt=media"
      />
    </Grid>
  );
};

const ImageDiv = styled.img`
  width: ${(props) => props.width};
  ${(props) => (props.margin ? `margin:${props.margin}` : "")};
`;

const Hr = styled.hr`
  margin-top: 26px;
  color: "#9b9b9b";
`;

const Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgcolor};
  ${(props) => (props.margin ? `margin:${props.margin}` : "")};
  border: none;
  color: white;
  text-align: center;
  cursor: pointer;
  ${(props) => (props.border ? `border:${props.border}` : "")};
`;

export default Detail;
