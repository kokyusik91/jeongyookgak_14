## 🥩 정육각 클론 프론트엔드
--- 

## 📰 상세 페이지

![image](/public/images/logo_image.png)
![image](/public/images/login_image.png)
![image](/public/images/main_image.png)
![image](/public/images/shopping_image.png)
![image](/public/images/detail_image.png)
![image](/public/images/cart_image.png)

## 💻 웹 사이트

http://nohgangpyo.s3-website.ap-northeast-2.amazonaws.com/

## 🎬 실행화면

유튜브 링크 : https://www.youtube.com/watch?v=3aeIOFv_EZ0

## ⚙️ 기술 스택 및 툴

<img src="https://img.shields.io/badge/Yarn-1.22.15-2C8EBB?style=flat-square&logo=Yarn&logoColor=white"/> 
<img src="https://img.shields.io/badge/React-17.0.1-61DAFB?style=flat-square&logo=React&logoColor=white"/> 
<img src="https://img.shields.io/badge/React Router-5.2.0-CA4245?style=flat-square&logo=React Router&logoColor=white"/> 
<img src="https://img.shields.io/badge/Redux-4.1.1-764ABC?style=flat-square&logo=Redux&logoColor=white"/> 
<img src="https://img.shields.io/badge/Font Awesome-5.15.4-0081CB?style=flat-square&logo=Font Awesome&logoColor=white"/>
 <img src="https://img.shields.io/badge/Axios-0.21.1-764ABC?style=flat-square&logo=Axios&logoColor=white"/>
  <img src="https://img.shields.io/badge/ESLint-8.0.0-4B32C3?style=flat-square&logo=ESLint&logoColor=white"/> 
  <img src="https://img.shields.io/badge/MySQL-8.0.25-4479A1?style=flat-square&logo=MySQL&logoColor=white"/> 
   <img src="https://img.shields.io/badge/Spring-2.5.5-6DB33F?style=flat-square&logo=Spring&logoColor=white"/> 
    <img src="https://img.shields.io/badge/Java-1.8-007396?style=flat-square&logo=Java&logoColor=white"/> 
 

## 🥩 정육각(Music Recommended List)소개

- 정육각 클론코딩! 최저가 보장! 품질 보장! 호주산, 미국산 취급 안합니다
믿고 구매해주세요

## 🙋 팀원

- Front-end(React): 김기철, 고규식, 노강표
- Back-end(Node.js): 최선강, 박시준, 권민혁

## 🌎 API

https://rose-log-964.notion.site/f2d135f6a3a041c2927b8819cb6aff9d



## ⏳ 팀 프로젝트 기간

- 2021.10.18 ~ 2021.10.23(6일)

## ✨ 주요 기능

1. 로그인

- 카카오 소셜 로그인을 구현하였습니다.
- JWT 토큰을 세션스토리지에 저장하여 사용합니다.
- 인터셉터를 활용하여 헤더에 토큰을 전달하였습니다.


2. 쇼핑 리스트 및 상세페이지

- 리액트 리덕스를 사용하여 자신이 현재 원하는 상품 카테고리를 선택하여 그에 해당하는 상품 리스트를 볼 수 있습니다.

- 자신이 원하는 상품을 장바구니에 추가할 수 있습니다.


3. 장바구니 페이지
- 자신이 장바구니에 추가한 상품의 수량을 조절하거나 삭제 할 수 있고, 총 금액을 확인할 수 있습니다.


## 🔨 직면한 문제 및 해결방안

1. API 요청할때, Header에 토큰이 담겨질때가 있고, 안담겨질때가 있었다.
* **해결** : axios interceptor를 활용하여 API요청 직전에 Header에 토큰을 넣어서 요청을 보낼 수 있다.
2. 회원가입을 완료후, 로그인 성공 실패시 요청 응답이 모두 status 200 받는 것을 사전에 조율하지 못하여 응답값을 받는데 혼선이 있었습니다.
- **해결** : 
백엔드와 소통하여 실패시에도 응답이 status200으로 보내준다는 것을 확인하였고, 이에따라 처리하였습니다.
3. 장바구니 페이지에서 새로고침을 하면 기존 데이터가 유지되는데, 뷰에서는 숫자계산이 꼬이는 문제
- **해결** : 장바구니 삭제 기능에서는 기존 state_list에 있는 Id들중 현재 가지고있는 Id와 비교하여 다른값들만 filter하여 대치해준다. 여기서 기존 하위 컴포넌트를 Map을 돌릴때, `key={index}`를 넘겨줘서 문제가 발생하여 `key={id}`값으로 바꿔주어 문제를 해결 하였습니다.

4. 장바구니에 같은 품목을 추가할 경우 기존품목에 수량만 추가되야 하는데, 항목으로 밑에 추가됨 
- **해결** : 스토어에 저장되어있는 carts_list에서 `findIndex` 하여 id들을 순회하며 넘겨받은 `payload.item.id`와 비교하여 해당 index 값을 찾은후 index가 있으면 해당 cart_list의 count 값에 넘겨받은 `payload.item.count`를 더해줍니다. index가 없으면 `push` 해준다.

## ⌨️ 느낀점

- 김기철 회고 ([Velog](https://velog.io/@choel0304/WIL-10.1110.17-%ED%95%AD%ED%95%B4-6%EC%A3%BC%EC%B0%A8))
- 고규식 회고 ([Velog](https://velog.io/@kokyusik91/%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9-%ED%8C%80%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0))
- 노강표 회고 ([Velog](https://velog.io/@shrkdvy123/20211023-TIL))

---

