import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

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
      userId: "",
      nickname: "",
    },
    isLogin: false,
  },
};

//middleWare

//회원가입
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
        // console.log(res.data.result)
        window.alert("회원에 성공적으로 가입했습니다.");
        history.push("/Login");
        console.log(res);
      })
      .catch((error) => {
        window.alert("회원가입 실패", error);
      });
  };
};

//로그인
const GetUserDB = (user) => {
  return function (dispatch, getState, { history }) {
    // console.log(user)
    apis
      .login(user)
      .then((res) => {
<<<<<<< HEAD
        console.log(res.data);
=======
        console.log(res);
        const USER_TOKEN = res.data.token;
        window.sessionStorage.setItem("USER_TOKEN", USER_TOKEN);

        const user = {
          userInfo: { email: res.data.email, nickname: res.data.nickname },
          isLogin: true,
        };

        dispatch(SetUser(user));

        window.alert("성공적으로 로그인이 되었습니다!!");
        history.push("/");
>>>>>>> feature_Login
      })
      .catch((error) => {
        console.log(error, "로그인 실패");
      });
  };
};

//로그인 체크
const LoginCheck = () => {
  return function (dispatch, getState, { history }) {
    apis
      .loginCheck()
      .then((res) => {
        console.log(res, "로그인 체크");

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

//로그아웃
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
        // console.log(action.payload.user);
        draft.user.userInfo = action.payload.user.userInfo;
        draft.user.isLogin = action.payload.user.isLogin;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        // draft.userInfo = action.payload.userInfo;
        // draft.isLogin = ;
      }),
  },
  initialState
);

//action creator export
const actionCreators = {
  SignupDB,
  GetUserDB,
  LoginCheck,
  LogOutDB,
};

export { actionCreators };
