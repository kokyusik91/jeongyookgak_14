import axios from "axios";

const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: "http://3.36.92.203",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    // Authorization: `Bearer ${sessionStorage.getItem('token')}`,
  },
});

// headers : {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}
export const apis = {
  //User
  signUp: (userInfo) => instance.post("api/signup", userInfo),
  login: (userInfo) => instance.post("api/login", userInfo),

  get: (url = "/") => instance.get(`${url}`),
  create: (url = "/", contents = {}) => instance.post(`${url}`, contents),
  update: (url = "/", contents = {}) => instance.patch(`${url}`, contents),
  delete: (url = "", id = "") => instance.delete(`${url}/${id}`),
  getReply: (url = "/", id = "") => instance.get(`${url}/${id}`),
};

// apis
// .getPost()
// .then((response) => {
//   console.log(response.data);
// })
// .catch((err) => {
//   console.log(err);
// });
