import axios from 'axios';

const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: 'http://3.36.92.203',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    // Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    accept: 'application/json',
  },
});

// headers : {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}
export const apis = {
  // baseURL을 미리 지정해줬기 때문에 함수의 첫 번째 인자에 들어가는 url은
  // http://localhost:4000/ + 내가 작성한 url 즉 예시로
  // getPost함수에서는 instance.get('http://localhost:4000/posts')로 요청을 보내게 됩니다.
  // get과 delete의 경우 두 번째 인자에 데이터를 담아 보낼수 없기 때문에 서버에 데이터를 보낼경우 쿼리를 이용하여 보내주도록 합니다.

  // 게시물 불러오기
  // getPost: () => instance.get(),
  // // 게시물 작성하기
  // createPost: (contents) => instance.post("/user/register", contents),
  // 게시물 수정하기
  // editPost: (content) => instance.put(`/user/register`, content),
  // // 게시물 삭제하기
  // delPost: (id) => instance.delete(`/posts/${id}`),

  // 모듈화 작업
  get: (url = '/') => instance.get(`${url}`),
  create: (url = '/', contents = {}) => instance.post(`${url}`, contents),
  update: (url = '/', contents = {}) => instance.patch(`${url}`, contents),
  delete: (url = '', id = '') => instance.delete(`${url}/${id}`),
  getReply: (url = '/', id = '') => instance.get(`${url}/${id}`),
};

// apis
// .getPost()
// .then((response) => {
//   console.log(response.data);
// })
// .catch((err) => {
//   console.log(err);
// });
