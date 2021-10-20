import React from "react";
import styled from "styled-components";
import Grid from "../elements/Grid";

import image1 from "../images/main_image1.png";
import image2 from "../images/main_image2.png";
import image3 from "../images/main_image3.png";
import image4 from "../images/main_image4.png";

import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userAction } from "../redux/modules/post";

const Main = () => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  console.log(post_list);

  React.useEffect(() => {
    dispatch(userAction.getPostDB());
  }, []);

  return (
    <Grid>
      <Grid>
        <Image bg={image1} pointer padding="28% 0 0 0"></Image>
      </Grid>

      <Grid is_flex2 width="60vw" margin="4rem auto">
        <Grid>
          <Image bg={image2} pointer padding="30% 0 0 0"></Image>
        </Grid>
        <Grid>
          <Image bg={image3} pointer padding="30% 0 0 0"></Image>
        </Grid>
      </Grid>

      <Grid width="60vw" margin="4rem auto">
        <Text size="32px" bold>
          정육각 베스트 상품
        </Text>
      </Grid>
      
      <Grid width="60vw" margin="4rem auto" flex wrap >
          {post_list.map((p, idx) => {
            return <Post key={p.id} {...p} />;
          })}
      </Grid>

      <Grid width="60vw" margin="4rem auto">
        <Grid>
          <Image bg={image4} pointer padding="16% 0 0 0"></Image>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Image = styled.div`
  ${(props) => (props.padding ? `padding:${props.padding}` : "")};
  ${(props) => (props.pointer ? `cursor: pointer;` : "")};
  ${(props) => (props.bg ? `background-image: url(${props.bg})` : "")};
  background-position: center;
  background-size: cover;
`;

const Text = styled.p`
  ${(props) => (props.size ? `font-size:${props.size}` : "")};
  ${(props) => (props.bold ? `font-weight:800 ` : `font-weight:600`)};
`;

export default Main;
