const CLIENT_ID = "d61dfbb6d55458dae646635fb1fbb89d"; // REST API 키
const REDIRECT_URI = "http://localhost:3000/user/kakao/callback"; //Redirect URI

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
