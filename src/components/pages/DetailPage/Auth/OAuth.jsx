const REST_API_KEY = "328cab67369f3a5fd57c0f12d10037aa"; //REST API KEY
const REDIRECT_URI = "http://localhost:5173/oauth"; //Redirect URI
export const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;