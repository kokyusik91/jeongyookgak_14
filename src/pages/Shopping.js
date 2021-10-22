/* eslint-disable */

import React from "react";
import styled from "styled-components";
import Grid from "../elements/Grid";

import ready_imgae from "../images/ready_image.png";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as useActions } from "../redux/modules/post";

const Shopping = () => {
  const dispatch = useDispatch();
  const category_list = useSelector((state) => state.post.category_list);
  const category_image = useSelector((state) => state.post.category_image);

  const [checkvalue, setCheckvalue] = React.useState("PORK");
  const checkValue = () => {
    setCheckvalue(category);
  };

  let category = null;

  const handleCategory = (e) => {
    category = e.target.value;

    dispatch(useActions.getCategoryDB(category));
  };

  React.useEffect(() => {
    dispatch(useActions.getCategoryDB("PORK"));
  }, []);

  return (
    <React.Fragment>
      <Grid>
        <Image bgi={category_image} width="13vw" />
      </Grid>

      <Grid width="60vw" margin="4rem auto" flex>
        <Button
          bg={checkvalue === "PORK" ? "#212121" : "#eee"}
          color={checkvalue === "PORK" ? "white" : "#212121"}
          value="PORK"
          margin="0 5px 0 0px"
          onClick={(e) => {
            handleCategory(e);
            checkValue();
          }}
        >
          돼지
        </Button>
        <Button
          bg={checkvalue === "BEEF" ? "#212121" : "#eee"}
          color={checkvalue === "BEEF" ? "white" : "#212121"}
          value="BEEF"
          margin="0 5px 0 0"
          onClick={(e) => {
            handleCategory(e);
            checkValue();
          }}
        >
          소
        </Button>
        <Button
          bg={checkvalue === "CHICKEN" ? "#212121" : "#eee"}
          color={checkvalue === "CHICKEN" ? "white" : "#212121"}
          value="CHICKEN"
          margin="0 5px 0 0"
          onClick={(e) => {
            handleCategory(e);
            checkValue();
          }}
        >
          닭
        </Button>
        <Button
          bg={checkvalue === "SEAFOOD" ? "#212121" : "#eee"}
          color={checkvalue === "SEAFOOD" ? "white" : "#212121"}
          value="SEAFOOD"
          margin="0 5px 0 0"
          onClick={(e) => {
            handleCategory(e);
            checkValue();
          }}
        >
          수산
        </Button>
        <Button
          bg={checkvalue === "MEALKIT" ? "#212121" : "#eee"}
          color={checkvalue === "MEALKIT" ? "white" : "#212121"}
          value="MEALKIT"
          margin="0 5px 0 0"
          onClick={(e) => {
            handleCategory(e);
            checkValue();
          }}
        >
          밀키트
        </Button>
        <Button
          bg={checkvalue === "MILK" ? "#212121" : "#eee"}
          color={checkvalue === "MILK" ? "white" : "#212121"}
          value="MILK"
          margin="0 5px 0 0"
          onClick={(e) => {
            handleCategory(e);
            checkValue();
          }}
        >
          우유
        </Button>
        <Button
          bg={checkvalue === "EGG" ? "#212121" : "#eee"}
          color={checkvalue === "EGG" ? "white" : "#212121"}
          value="EGG"
          margin="0 5px 0 0"
          onClick={(e) => {
            handleCategory(e);
            checkValue();
          }}
        >
          달걀
        </Button>
        <Button
          bg={checkvalue === "BABY" ? "#212121" : "#eee"}
          color={checkvalue === "BABY" ? "white" : "#212121"}
          value="BABY"
          margin="0 5px 0 0"
          onClick={(e) => {
            handleCategory(e);
            checkValue();
          }}
        >
          이유식
        </Button>
      </Grid>

      {category_list.length >= 1 ? (
        <Grid width="60vw" margin="4rem auto" flex wrap>
          {category_list.map((p, idx) => {
            return <Post key={p.id} {...p} history={history} />;
          })}
        </Grid>
      ) : (
        <Grid width="60vw" margin="4rem auto" is_flex2>
          <Grid>
            <Image bgi={ready_imgae} width="13vw" />
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
};

const Button = styled.button`
  font-weight: bold;
  cursor: pointer;
  border-style: none;
  width: 143.63px;
  height: 56px;
  background-color: #f5f5f5;
  ${(props) => (props.padding ? `padding:${props.padding}` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color:${props.bg}` : "")};
  ${(props) => (props.color ? `color:${props.color}` : "")};
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
