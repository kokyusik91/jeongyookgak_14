import React from "react";
import styled from "styled-components";
import Grid from "../elements/Grid";

import { useSelector} from "react-redux";

const Modal = (props) => {
  const {_modalClose, _id} = props
  const category_list = useSelector((state) => state.post.category_list)
  console.log('모달 카테고리 리스트',category_list)

  const product = category_list.find((p)=> (p.id === _id))
  console.log('단품 정보', product)

  const [count, setCount] = React.useState(1);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) setCount(count - 1);
  };



  return (
    <ModalParent>
      <Grid width="500px" bg="white" radius="5px" position="absolute">
        <Grid>
          <Cancelbtn onClick={_modalClose}>X</Cancelbtn>
        </Grid>

        <Grid padding="40px 40px 0px 40px">
          <Grid>
            <Text size="25px" bold center="true">
              {product.title}
            </Text>
          </Grid>

          <Grid is_flex margin="40px 0 0 0" border="1px solid #e1dedf">
            <Countbtn onClick={decreaseCount}>-</Countbtn>
            <Text >{count}</Text>
            <Countbtn onClick={increaseCount}>+</Countbtn>
          </Grid>

          <Grid margin="14px 0 0 0">
            <Text size="16px" bold>
              옵션선택
            </Text>
          </Grid>

          <Grid height="50px" margin="5px 0 0 0" border="1px solid #e1dedf" is_flex2>
              <Text center="true" >보통(16mm)</Text>
          </Grid>

          <Grid is_flex4 margin="10px 0  0 0">
            <Text bold size="24px">
              {product.price * count}원
            </Text>
          </Grid>
        </Grid>

        <Grid is_flex margin="10px 0  0 0">
          <Buybtn>바로구매</Buybtn>
          <Cartbtn>장바구니</Cartbtn>
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
  ${(props) => (props.center ? `text-align:center` : "")}
  ${(props) => (props.color ? `color:${props.color}` : "")};
  ${(props) => (props.size ? `font-size:${props.size}` : "")};
  ${(props) => (props.bold ? `font-weight:600 ` : `font-weight:400`)};
  ${(props) => (props.border ? `border:${props.border}` : "")}
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
  color: #9b9b9b;
  font-size: 30px;
  background-color: white;
  width: 50px;
  height: 50px;
  border: 1px solid #e1dedf;
`;

const Cartbtn = styled.button`
  color: white;
  font-size: 16px;
  font-weight: 700;
  background-color: black;
  width: 50%;
  height: 60px;
  border: none;
`;

const Buybtn = styled.button`
  color: white;
  font-size: 16px;
  font-weight: 700;
  background-color: #acacac;
  width: 50%;
  height: 60px;
  border: none;
`;

export default Modal;
