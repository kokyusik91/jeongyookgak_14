import React from "react";
import styled from "styled-components";
import Grid from "../elements/Grid";

const Modal = (props) => {
  const modaloff = () => {
    props._setModal(false);
    // setUploadImageurl(null);
  };
  
  return (
    <ModalParent>
      <Grid type='modal' >
      <Cancelbtn onClick={modaloff}>닫기</Cancelbtn>
        <Grid>
          <Text size="32px" bold>
            초신선 돼지 삽겹살 구이용
          </Text>
        </Grid>

        <Grid is_flex>
          <button>버튼</button>
          <p>숫자</p>
          <button>버튼</button>
        </Grid>

        <Grid>
          <Text size="24px" bold>
            옵션선택
          </Text>
          <p>드롭다운</p>
        </Grid>

        <Grid is_flex>
          <button>바로구매</button>
          <button>장바구니</button>
        </Grid>
      </Grid>
    </ModalParent>
  );
};

const Text = styled.p`
  text-align: center;
  ${(props) => (props.color ? `color:${props.color}` : "")};
  ${(props) => (props.size ? `font-size:${props.size}` : "")};
  ${(props) => (props.bold ? `font-weight:800 ` : `font-weight:400`)};
`;


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

const Cancelbtn = styled.button`
  position: absolute;
  top: -35px;
  right: 5px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  /* transform: translate(-50%, -50%); */
  background-color: transparent;
  color: #fff;
  transition: all ease 0.3s;
  &:hover {
    color: #ff4949;
  }
`;

export default Modal;
