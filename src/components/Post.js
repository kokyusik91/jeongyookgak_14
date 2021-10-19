import React from "react";
import Grid from "../elements/Grid";
import styled from "styled-components";
import image1 from "../images/main_image1.png";
import button from "../images/button.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Post = () => {
  const handleMouseEnter = (e) => {
    e.target.style.background = "black";
  };
  const handleMouseLeave = (e) => {
    e.target.style.background = "white";
  };

  return (
    <React.Fragment>
      <Grid bg="#f9f7f8" width="20vw">
        <Grid>
          <Image bgi={image1} margin="90px 50px 20px" padding="40% 0 0 0 " b>
            이미지
          </Image>
          <Grid is_flex4 width="auto" margin=" 0px 15px 10px 0px">
            <Button
              onClick={() => {
                console.log("하이");
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              버튼
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid margin="15px 0 0 0">
        <Text size="20px" bold>
          타이틀
        </Text>
        <Text size="20px">가격</Text>
      </Grid>
    </React.Fragment>
  );
};

const Image = styled.div`
  ${(props) => (props.height ? `padding:${props.height}` : "")};
  ${(props) => (props.width ? `padding:${props.width}` : "")};
  ${(props) => (props.padding ? `padding:${props.padding}` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.pointer ? `cursor: pointer;` : "")};
  ${(props) => (props.bgi ? `background-image: url(${props.bgi})` : "")};
  ${(props) => (props.bg ? `background-color:${props.bg}` : "")};
  ${(props) => (props.radius ? `background-radius:${props.radius}` : "")};


  background-position: center;
  background-size: cover;
`;

const Button = styled.button`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 2px solid #eee;
  box-shadow: 0 25px 10px -15px rgb(0 0 0 / 12%);
  background-color: #fff;
  cursor: pointer;
  /* background-image: url("../images/button.png");
  background-size: cover;
  background-position: center; */
`;

const Text = styled.p`
  ${(props) => (props.size ? `font-size:${props.size}` : "")};
  ${(props) => (props.bold ? `font-weight:800 ` : `font-weight:400`)};
`;

export default Post;
