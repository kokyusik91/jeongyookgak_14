import React, { useState } from 'react';
import styled from 'styled-components';
import Grid from '../elements/Grid';
import Text from '../elements/Text';
import { history } from '../redux/configureStore';

const Items = (props) => {
  console.log('props로 전달받은 데이터', props);
  const [수량, 수량변경] = useState(props.count);
  const countMinus = () => {
    if (수량 < 2) {
      return;
    } else 수량변경(수량 - 1);
  };
  const countPlus = () => {
    수량변경(수량 + 1);
  };
  return (
    <Libox>
      <ImageBox width='109px' src={props.image} />
      <Grid margin='0 0 0 53px' width='284px'>
        <Text color='black'>{props.title}</Text>
        <Text color='black'>보통(16mm)</Text>
      </Grid>
      <Text color='black' width='80px'>
        600mg 기준
      </Text>
      <Grid is_flex width='118px' height='38px' justify='center'>
        <Button
          width='44px'
          height='38px'
          bgcolor='transparent'
          margin='0'
          onClick={countMinus}
        >
          <Text color='black'>-</Text>
        </Button>
        <Grid width='44px' height='38px' margin='0 auto'>
          <Text color='black'>{수량}</Text>
        </Grid>
        <Button
          width='44px'
          height='38px'
          bgcolor='transparent'
          margin='0'
          onClick={countPlus}
        >
          <Text color='black'>+</Text>
        </Button>
      </Grid>
      <Grid width='147px'>
        <Text color='black' width='143px'>
          {props.price}원
        </Text>
      </Grid>
      <Button width='40px' height='40px' color='black'>
        <Text color='black' width='143px'>
          X
        </Text>
      </Button>
    </Libox>
  );
};

const Libox = styled.li`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #f8f8f8;
  color: 'black';
`;

const ImageBox = styled.img`
  display: block;
  margin-left: 24px;
`;

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

export default Items;
