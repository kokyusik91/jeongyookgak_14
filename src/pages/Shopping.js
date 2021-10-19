import React from "react";
import styled from "styled-components";
import Grid from "../elements/Grid";

import Post from "../components/Post";
import shopping_image1 from "../images/shopping_image1.png";

const Shopping = () => {
  return (
    <React.Fragment>
      <Grid>
        <Image bg="green" bgi={shopping_image1} width="13vw" />
      </Grid>

      <Grid width="60vw" margin="4rem auto">
        <Grid flex>
          <Button margin="0 5px 0 0px">
            <Text bold>돼지</Text>
          </Button>
          <Button margin="0 5px 0 0">
            <Text bold>소</Text>
          </Button>
          <Button margin="0 5px 0 0">
            <Text bold>닭</Text>
          </Button>
          <Button margin="0 5px 0 0">
            <Text bold>수산</Text>
          </Button>
          <Button margin="0 5px 0 0">
            <Text bold>밀키트</Text>
          </Button>
          <Button margin="0 5px 0 0">
            <Text bold>우유</Text>
          </Button>
          <Button margin="0 5px 0 0">
            <Text bold>달걀</Text>
          </Button>
          <Button margin="0 5px 0 0">
            <Text bold>이유식</Text>
          </Button>
        </Grid>
      </Grid>

      <Grid width="60vw" margin="4rem auto">
        <Grid is_flex wrap>
          <Post />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Button = styled.button`
  cursor: pointer;
  border-style: none;
  width: 143.63px;
  height: 56px;
  background-color: #f5f5f5;
  ${(props) => (props.padding ? `padding:${props.padding}` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color:${props.bg}` : "")};
`;

const Text = styled.p`
  color: black;
  ${(props) => (props.size ? `font-size:${props.size}` : "")};
  ${(props) => (props.bold ? `font-weight:800 ` : `font-weight:600`)};
`;

const Image = styled.div`
  ${(props) => (props.height ? `padding:${props.height}` : "")};
  ${(props) => (props.width ? `padding:${props.width}` : "")};
  ${(props) => (props.padding ? `padding:${props.padding}` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.pointer ? `cursor: pointer;` : "")};
  ${(props) => (props.bg ? `background-color:${props.bg}` : "")};
  ${(props) => (props.radius ? `background-radius:${props.radius}` : "")};
  ${(props) => (props.bgi ? `background-image: url(${props.bgi})` : "")};

  background-position: center;
  background-size: cover;
`;

export default Shopping;
