import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

import { emailCheck } from "../shared/emailCheck";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userId, setUserId] = React.useState("");
  const [pw, setPw] = React.useState("");

  const login = () => {
    if (userId === "" || pw === "") {
      window.alert("아이디 or 패스워드를 입력하세요.");
    }

    if (!emailCheck(userId)) {
      window.alert("이메일 형식이 맞지않습니다.");
    }

<<<<<<< HEAD
    dispatch(userActions.GetUserDB({ email:userId, pw:pw }));
=======
    dispatch(userActions.GetUserDB({ email: userId, pw: pw }));
>>>>>>> feature_Login
  };

  return (
    <>
      <Grid height="100vh">
        <Text center margin="100px" size="24px" weight="700" color="black">
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
              onChange={(e) => {
                setUserId(e.target.value);
              }}
            />
            <Input
              height="46px"
              margin="0px 0px 8px 0px"
              placeholder="비밀번호를 입력하세요"
              type="password"
              border="1px solid #e1dedf"
              onChange={(e) => {
                setPw(e.target.value);
              }}
            />
            <Button
              width="100%"
              background="black"
              color="#fff"
              onClick={() => {
                login();
              }}
            >
              로그인
            </Button>
            <Grid isFlexCenter margin="20px">
              <Text>정육각이 처음이신간요?</Text>
              <span
                style={{
                  color: "rgb(233, 45, 68)",
                  cursor: "pointer",
                  margin: "10px",
                }}
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
    props.isFlex
      ? `display : flex; align-items : center ; justify-content : space-between;`
      : ""};
  ${(props) =>
    props.isFlexCenter
      ? `display : flex; align-items : center ; justify-content :center`
      : ""};
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
  /* cursor: pointer; */
`;
