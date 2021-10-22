import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";
import axios from "axios";
import { appendOwnerState } from "@mui/core";

//액션 타입
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

//액션 생성함수
const SetUser = createAction(SET_USER, (user) => ({ user }));
const LogOut = createAction(LOG_OUT, () => {});

//초기값
const initialState = {
  user: {
    userInfo: {
      userId: null,
      nickname: null,
    },
    isLogin: false,
  },
};

//middleWare
const SignupDB = (userId, userNickname, userPw, userPwCheck) => {
  const userInfo = {
    email: userId,
    nickname: userNickname,
    pw: userPw,
    pwCheck: userPwCheck,
  };

  return function (dispatch, getState, { history }) {
    apis
      .signUp(userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data.result === "fail") {
          window.alert(res.data.errorMessage);
          window.location.reload(true);
          return;
        } else {
          window.alert("회원가입에 성공하셨습니다.");
          history.push("/Login");
        }
      })
      .catch((error) => {
        // error.response.data.message
        window.alert("회원가입 실패", error);
      });
  };
};

const GetUserDB = (user) => {
  return function (dispatch, getState, { history }) {
    // console.log(user)
    apis
      .login(user)
      .then((res) => {
        console.log("로그인정보", res);

        if (res.data.result === "fail") {
          window.alert(res.data.errorMessage);
          window.location.reload(true);
          return;
        } else {
          const USER_TOKEN = res.data.token;
          window.sessionStorage.setItem("USER_TOKEN", USER_TOKEN);
          const user = {
            userInfo: { email: res.data.email, nickname: res.data.nickname },
            isLogin: true,
          };
          dispatch(SetUser(user));
          window.alert("성공적으로 로그인이 되었습니다!!");
          history.push("/");
        }
      })
      .catch((error) => {
        console.log(error, "로그인 실패");
      });
  };
};

const KakaoLogin = (code) => {
  return async (dispatch, { history }) => {
    try {
      const { data } = await apis.kakaoLogin(code);

      const USER_TOKEN = data.token;
      window.sessionStorage.setItem("USER_TOKEN", USER_TOKEN);

      const user = {
        userInfo: { email: data.email, nickname: data.nickname },
        isLogin: true,
      };

      dispatch(SetUser(user));
      // window.alert("성공적으로 로그인이 되었습니다!!");
      // history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};

const LoginCheck = () => {
  return function (dispatch) {
    apis
      .loginCheck()
      .then((res) => {
        // console.log(res, '로그인 체크');

        const user = {
          userInfo: { email: res.data.email, nickname: res.data.nickname },
          isLogin: true,
        };

        dispatch(SetUser(user));
      })
      .catch((error) => {
        console.log(error, "로그인체크 실패");
      });
  };
};

const LogOutDB = () => {
  return function (dispatch, getState, { history }) {
    sessionStorage.removeItem("USER_TOKEN");
    dispatch(LogOut());
    window.alert("로그아웃 되었습니다!");
    history.push("/");
  };
};

//reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user.userInfo = action.payload.user.userInfo;
        draft.user.isLogin = action.payload.user.isLogin;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user.userInfo = null;
        draft.user.isLogin = null;
      }),
  },
  initialState
);

//action creator export
const actionCreators = {
  SignupDB,
  GetUserDB,
  KakaoLogin,
  LoginCheck,
  LogOutDB,
};

export { actionCreators };
