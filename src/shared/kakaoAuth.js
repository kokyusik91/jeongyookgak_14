const CLIENT_ID = "d61dfbb6d55458dae646635fb1fbb89d"; // REST API 키
const REDIRECT_URI = "http://localhost:3000/user/kakao/callback"; //Redirect URI

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
// 파라미터 시작은 ? 부터.

//배포후 web플랫폼에서 배포주소 추가해주기.
