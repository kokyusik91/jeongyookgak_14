/* eslint-disable */

import axios from "axios";

const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: "http://3.36.92.203",
});

instance.interceptors.request.use(
  function (config) {
    // 요청 성공 직전 호출됩니다.
    // axios 설정값을 넣습니다. (사용자 정의 설정도 추가 가능)

    config.headers = {
      "content-type": "application/json;charset=UTF-8",
      accept: "application/json",

      Authorization: `Bearer ${sessionStorage.getItem("USER_TOKEN")}`,
    };

    return config;
  },
  function (error) {
    // 요청 에러 직전 호출됩니다.
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    // console.log(response, '응답 성공직전');
    /*
      http status가 200인 경우
      응답 성공 직전 호출됩니다. 
      .then() 으로 이어집니다.
  */

    return response;
  },
  function (error) {
    /*
      http status가 200이 아닌 경우
      응답 에러 직전 호출됩니다.
      .catch() 으로 이어집니다.    
  */
    return Promise.reject(error);
  }
);

export const apis = {
  //User
  signUp: (userInfo) => instance.post("api/signup", userInfo),
  login: (userInfo) => instance.post("api/login", userInfo),
  loginCheck: () => instance.get("/api/login/check"),
<<<<<<< HEAD
  kakaoLogin: (code) => instance.get(`/user/kakao/callback?code=${code}`),
=======
  kakaoLogin: (code) => instancee.gt(`/user/kakao/callback?code=${code}`),
>>>>>>> feature_Login

  get: (url = "/") => instance.get(`${url}`),
  create: (contents) => instance.post("/api/cart", contents),
  put: (url = "/", contents) => instance.put(`${url}`, contents),
  update: (url = "/", contents = {}) => instance.patch(`${url}`, contents),
  delete: (url = "/", contents) => instance.delete(`${url}`, contents),
  getReply: (url = "/", id = "") => instance.get(`${url}/${id}`),
};
