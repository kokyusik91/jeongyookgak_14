/* eslint-disable */

import React from 'react';
import styled from 'styled-components';
import Grid from '../elements/Grid';
import { actionCreators as userAction } from '../redux/modules/cart';
import { useDispatch, useSelector } from 'react-redux';

const Modal = (props) => {
  const dispatch = useDispatch();
  const { _modalClose, id, category, title, price, image, imageDetail } = props;
  // console.log('모달데이터',props)

  // 버튼 useState
  const [count, setCount] = React.useState(1);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    if (count > 1) setCount(count - 1);
  };

  // 카트추가버튼
  const addcart = () => {
    dispatch(userAction.addCartDB(id, count));
  };

  return (
    <ModalParent>
      <Grid width='500px' bg='white' radius='5px' position='absolute'>
        <Grid>
          <Cancelbtn onClick={_modalClose}>X</Cancelbtn>
        </Grid>

        <Grid padding='40px 40px 0px 40px'>
          <Grid>
            <Text size='25px' bold center='true'>
              {title}
            </Text>
          </Grid>

          <Grid
            is_flex
            height='50px'
            margin='40px 0 0 0'
            border='1px solid #e1dedf'
          >
            <Countbtn onClick={decreaseCount}>-</Countbtn>
            <Grid
              width='350px'
              is_flex2
              height='50px'
              border='1px solid #e1dedf'
            >
              <Text>{count}</Text>
            </Grid>
            <Countbtn onClick={increaseCount}>+</Countbtn>
          </Grid>

          <Grid margin='14px 0 0 0'>
            <Text size='16px' bold>
              옵션선택
            </Text>
          </Grid>

          <Grid
            height='50px'
            margin='5px 0 0 0'
            border='1px solid #e1dedf'
            is_flex2
          >
            <Text center='true'>보통(16mm)</Text>
          </Grid>

          <Grid is_flex4 margin='10px 0  0 0'>
            <Text bold size='24px'>
              {price * count}원
            </Text>
          </Grid>
        </Grid>

        <Grid is_flex margin='10px 0  0 0'>
          <Buybtn
            onClick={() => {
              window.alert('서비스 준비중입니다.');
            }}
          >
            바로구매
          </Buybtn>
          <Cartbtn onClick={addcart}>장바구니</Cartbtn>
        </Grid>
      </Grid>
    </ModalParent>
  );
};

const ModalParent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Text = styled.p`
  ${(props) => (props.center ? `text-align:center` : '')}
  ${(props) => (props.color ? `color:${props.color}` : '')};
  ${(props) => (props.size ? `font-size:${props.size}` : '')};
  ${(props) => (props.bold ? `font-weight:600 ` : `font-weight:400`)};
  ${(props) => (props.border ? `border:${props.border}` : '')}
`;

const Cancelbtn = styled.button`
  position: absolute;
  top: -20px;
  right: -18px;
  z-index: 1;

  color: white;
  font-size: 20px;
  font-weight: 550px;
  width: 35px;
  height: 35px;

  border: none;
  border-radius: 50%;

  background-color: black;
  cursor: pointer;
`;

const Countbtn = styled.button`
  cursor: pointer;
  color: #9b9b9b;
  font-size: 30px;
  background-color: white;
  width: 50px;
  height: 50px;
  border: 1px solid #e1dedf;
  margin: 0;
`;

const Cartbtn = styled.button`
  cursor: pointer;
  color: white;
  font-size: 16px;
  font-weight: 700;
  background-color: black;
  width: 50%;
  height: 60px;
  border: none;
`;

const Buybtn = styled.button`
  cursor: pointer;
  color: white;
  font-size: 16px;
  font-weight: 700;
  background-color: #acacac;
  width: 50%;
  height: 60px;
  border: none;
`;

export default Modal;
