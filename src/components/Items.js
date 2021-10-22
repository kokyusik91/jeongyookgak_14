/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Grid from '../elements/Grid';
import Text from '../elements/Text';
import { actionCreators as cartActions } from '../redux/modules/cart';

const Items = (props) => {
  console.log('props로 전달받은 데이터', props);
  const [수량, 수량변경] = useState(props.count);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log('너의 아이디는 무엇인고?', props.id);
  const deleteItem = () => {
    dispatch(cartActions.deleteCartDB(props.id));
  };
  // 숫자를 '원'으로 바꿔주는 함수
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const data = {
    cartId: props.id,
    productId: props.productId,
    count: 수량,
    price: Number(props.price),
  };
  // console.log('단가', data.price);

  // const data2 = {
  //   productId: props.productId,
  //   count: 수량,
  // };

  //뺄셈
  const countMinus = () => {
    if (수량 < 2) {
      return;
    } else {
      data.count = data.count - 1;
      수량변경(수량 - 1);
      //총 가격 뺄셈
      dispatch(cartActions.minusCartDB(data));
    }
  };
  // 바깥에서 console을 찍으면 원하는 state값이 나온다.
  // console.log(수량);

  //덧셈
  const countPlus = () => {
    data.count = data.count + 1;
    수량변경(수량 + 1);
    // 뷰는 컴포넌트에서
    // 실제 계산은 리듀서에서 진행 action만 보내면 기존 count에 +1
    //총 가격 덧셈
    dispatch(cartActions.plusCartDB(data));
  };

  return (
    <Libox>
      <ImageBox width='109px' src={props.image} />
      <Grid>
        <Text color='black' size='16px' width='284px'>
          {props.title}
        </Text>
        <Text color='black' size='13px' color='#bab8b8'>
          보통(16mm)
        </Text>
      </Grid>
      <Text color='#bab8b8'>{/* {props.price} */}600g 기준</Text>
      <ButtonContainer>
        <Button
          width='44px'
          height='38px'
          bgcolor='transparent'
          margin='0'
          onClick={countMinus}
        >
          <Text color='#9b9b9b' bold size='20px'>
            -
          </Text>
        </Button>
        <Grid is_flex justify='center' aligns='center' padding='6px'>
          <Text color='black'>{수량}</Text>
        </Grid>
        <Button
          width='44px'
          height='38px'
          bgcolor='transparent'
          margin='0'
          onClick={countPlus}
        >
          <Text color='#9b9b9b' bold size='20px'>
            +
          </Text>
        </Button>
      </ButtonContainer>

      <Grid>
        <Text color='black' size='16px'>
          {numberWithCommas(props.price * data.count)}원
        </Text>
      </Grid>
      <ButtonContainer2>
        <Button
          width='40px'
          height='40px'
          bgcolor='transparent'
          onClick={deleteItem}
        >
          <Text color='#bab8b8'>X</Text>
        </Button>
      </ButtonContainer2>
    </Libox>
  );
};

const Libox = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid #e0dedf;
  padding: 25px 0 25px 10px;
  color: 'black';
`;

const ImageBox = styled.img``;

const Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgcolor};
  ${(props) => (props.margin ? `margin:${props.margin}` : '')};
  /* border: none; */
  text-align: center;
  ${(props) => (props.border ? `border:${props.border}` : '')};
  border: none;
  color: 'black';
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 118px;
  border: 1px solid #e2e2e2;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer2 = styled.div`
  display: flex;
  border: 1px solid #e2e2e2;
  justify-content: center;
  align-items: center;
`;

export default Items;
