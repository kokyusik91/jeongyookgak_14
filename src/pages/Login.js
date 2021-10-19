import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const history = useHistory();
  return (
    <>
      <Grid height="100vh">
        <Text center margin="100px" size="24px" weight="700">
          로그인
        </Text>
        <Grid width="324px" margin="auto">
          <Grid>
            <Text weight="700" margin="0px 0px 10px 0px">
              이메일 로그인
            </Text>
            <Input
              height="46px"
              margin="0px 0px 8px 0px"
              placeholder="아이디(이메일 주소)를 입력하세요"
              border="1px solid #e1dedf"
            />
            <Input
              height="46px"
              margin="0px 0px 8px 0px"
              placeholder="비밀번호를 입력하세요"
              border="1px solid #e1dedf"
            />
            <Button width="100%" background="black" color="#fff" onClick={() => {}}>
              로그인
            </Button>
            <Grid isFlexCenter margin="20px">
              <Text>정육각이 처음이신간요?</Text>
              <span
                style={{ color: "rgb(233, 45, 68)", cursor: "pointer", margin: "10px" }}
                onClick={() => {
                  history.push("/Signup");
                }}
              >
                회원가입하기
              </span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;

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
`;

const Text = styled.p`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  ${(props) => (props.center ? `text-align : center ; ` : "")};
`;

const Input = styled.input`
  width: 100%;
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
`;

const Button = styled.button`
  color: ${(props) => props.color};
  height: ${(props) => props.height};
  width: 100%;
  height: 48px;
  background: ${(props) => props.background};
  border: none;
  cursor: pointer;
`;
