import React from "react";
import { useSelector } from "react-redux";

const Permit = (props) => {
  const isLogin = useSelector((state) => state.user.isLogin);
  const isToken = sessionStorage.getItem("USER_TOKEN") ? true : false;

  if (isLogin && isToken) {
    return <>{props.children}</>;
  } else {
    return null;
  }
};

export default Permit;
