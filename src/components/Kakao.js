import React from "react";
import { useDispatch } from "react-redux";

import { actionCreators as userActions } from "../redux/modules/user";

const Kakao = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  let code = new URL(window.location.href).searchParams.get("code");

  React.useEffect(() => {
    // You can await here
    // ...
    dispatch(userActions.KakaoLogin(code));
    history.push("/");
  }, [code, dispatch, history]);

  return <h1>리다이렉션 페이지입니다.</h1>;
};

export default Kakao;
