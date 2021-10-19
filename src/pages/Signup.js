import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const Signup = (props) => {
  const history = useHistory();

  return (
    <Grid height="100vh" center>
      <Grid margin=" auto">
        <Text center margin="100px" size="36px" weight="500">
          회원가입
        </Text>
        <Grid bg="#f7f7f7" height="100px" width="1200px" margin="auto" isFlexCenter>
          <FontAwesomeIcon icon={faPen} size="2x" />
          <Text margin="0px 0px 0px 10px" weight="700">
            1.정보 입력
          </Text>
        </Grid>

        <Grid width="700px" margin=" 100px auto 0px">
          <Text margin="10px 0px">가입정보 입력</Text>
          <Grid isFlex border="1px solid #e1dedf" height="80px">
            <Grid
              width="30%"
              height="100%"
              borderRight="1px solid #e1dedf"
              isFlexCenter
              bg="#f7f7f7"
            >
              아이디(이메일주소)
            </Grid>
            <Grid width="70%" margin="0px 0px 0px 15px">
              <Input width="80%" height="50px" border="1px solid #e1dedf" />
            </Grid>
          </Grid>
          <Grid isFlex border="1px solid #e1dedf" height="80px">
            <Grid
              width="30%"
              height="100%"
              borderRight="1px solid #e1dedf"
              isFlexCenter
              bg="#f7f7f7"
            >
              닉네임
            </Grid>
            <Grid width="70%" margin="0px 0px 0px 15px">
              <Input width="80%" height="50px" border="1px solid #e1dedf" />
            </Grid>
          </Grid>
          <Grid isFlex border="1px solid #e1dedf" height="80px">
            <Grid
              width="30%"
              height="100%"
              borderRight="1px solid #e1dedf"
              isFlexCenter
              bg="#f7f7f7"
            >
              비밀번호
            </Grid>
            <Grid width="70%" margin="0px 0px 0px 15px">
              <Input width="80%" height="50px" border="1px solid #e1dedf" />
            </Grid>
          </Grid>
          <Grid isFlex border="1px solid #e1dedf" height="80px">
            <Grid
              width="30%"
              height="100%"
              borderRight="1px solid #e1dedf"
              isFlexCenter
              bg="#f7f7f7"
            >
              비밀번호 확인
            </Grid>
            <Grid width="70%" margin="0px 0px 0px 15px">
              <Input width="80%" height="50px" border="1px solid #e1dedf" />
            </Grid>
          </Grid>
          <Grid isFlexCenter margin="30px 0px">
            <Button
              bg="#878887"
              color="#fff"
              weight="700"
              onClick={() => {
                history.goBack();
              }}
            >
              이전으로
            </Button>
            <Button
              bg="#000000"
              color="#fff"
              weight="700"
              onClick={() => {
                // history.push("/Login");
              }}
            >
              가입하기
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Signup;

const Grid = styled.div`
  ${(props) =>
    props.isFlex ? `display : flex; align-items : center ; justify-content : space-between;` : ""};
  ${(props) =>
    props.isFlexCenter ? `display : flex; align-items : center ; justify-content :center` : ""};

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.bg};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-right: ${(props) => props.borderRight};
`;

const Text = styled.p`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  ${(props) => (props.center ? `text-align : center ; ` : "")};
`;

const Input = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
`;

const Button = styled.button`
  color: ${(props) => props.color};
  height: ${(props) => props.height};
  width: 100%;
  height: 48px;
  background: ${(props) => props.bg};
  border: none;
  cursor: pointer;
`;
