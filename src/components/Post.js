import React from "react";
import Grid from "../elements/Grid";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import Modal from "../components/Modal";
import { history } from "../redux/configureStore";
import Permit from "../shared/Permit";

const Post = (props) => {
  const { id, category, title, price, image, imageDetail } = props;

  // 모달
  const [modal, setModal] = React.useState(false);
  const modalOpen = () => setModal(true);
  const modalClose = () => setModal(false);

  // 카트 CSS
  const [isHover, setIsHover] = React.useState(false);
  const handleMouseEnter = (e) => {
    setIsHover(true)
  };
  const handleMouseLeave = (e) => {
    setIsHover(false)
  };

  // 상세 페이지이동
  const movePage = () => {
    history.push(`/detail/${props.id}`);
    // 이동할때 scroll top으로 맞춰주기.
    window.scrollTo(0, 0);
  };


  return (
    <React.Fragment>
      <Grid margin='0 20px 15px 0' flexBasis>
        <Grid bg='#f9f7f8' width='100%'>
          <Grid _onClick={movePage}>
            <Image bgi={image} width='140px' margin='0px 30px'></Image>
          </Grid>

          <Permit>
            <Grid is_flex4 margin='0px 20px 0px 0px' padding='10px 0px'>
              <Button
                 onClick={() => {
                  modalOpen();
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                bg={isHover ? "black" : "white"}
              >
                {/* <ShoppingCartOutlinedIcon 
                  fontSize="large"
                  color="yellow"
                /> */}
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  color={isHover ? "white" : "black" }
                  size="2x"
                  cursor="pointer"
                />
              </Button>
            </Grid>
          </Permit>
        </Grid>

        <Grid margin='20px 0 0 0'>
          <Text size='20px' bold color='black'>
            {title}
          </Text>
          <Text size='20px' color='black'>
            가격 : {price}
          </Text>
        </Grid>
      </Grid>
      {modal === true ? <Modal _modalClose={modalClose} {...props} /> : ''}
    </React.Fragment>
  );
};

const Image = styled.div`
  ${(props) => (props.height ? `padding:${props.height}` : '')};
  ${(props) => (props.width ? `padding:${props.width}` : '')};
  ${(props) => (props.padding ? `padding:${props.padding}` : '')};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.pointer ? `cursor: pointer;` : '')};
  ${(props) => (props.bgi ? `background-image: url(${props.bgi})` : '')};
  ${(props) => (props.bg ? `background-color:${props.bg}` : '')};
  ${(props) => (props.radius ? `background-radius:${props.radius}` : '')};
  max-width: 400px;
  background-position: center;
  background-size: cover;
`;

const Button = styled.button`
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}

  ${(props) => (props.bg ? `background-color:${props.bg};` : "")} 
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 2px solid #eee;
  box-shadow: 0 25px 10px -15px rgb(0 0 0 / 12%);
  cursor: pointer;

`;

const Text = styled.p`
  ${(props) => (props.color ? `color:${props.color}` : '')};
  ${(props) => (props.size ? `font-size:${props.size}` : '')};
  ${(props) => (props.bold ? `font-weight:800 ` : `font-weight:400`)};
`;

export default Post;
