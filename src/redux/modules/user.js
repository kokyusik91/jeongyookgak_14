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
  userInfo: {
    userId: "shrkdvy@gmail.com",
    nickname: "강표",
  },
  isLogin: false,
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
        window.alert("회원에 성공적으로 가입했습니다.");
        history.push("/Login");
      })
      .catch((error) => {
        window.alert("회원가입 실패", error);
      });
  };
};

//로그인
const GetUserDB = (user) => {
  return function (dispatch, getState, { history }) {
    apis
      .login(user)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error, "로그인 실패");
      });
  };
};

//로그인 체크
const LoginCheck = () => {
  return function (dispatch, getState, { history }) {};
};

//로그아웃
const LogOutDB = () => {
  return function (dispatch, getState, { history }) {};
};

//reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user.userInfo = action.payload.userInfo;
        draft.user.isLogin = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user.userInfo = action.payload.userInfo;
        draft.user.isLogin = true;
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
