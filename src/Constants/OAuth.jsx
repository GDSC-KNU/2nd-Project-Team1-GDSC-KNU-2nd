export const CLIENT_ID = import.meta.env.VITE_APP_RESTAPI_KAKAO_APP_KEY;
export const REDIRECT_URI = import.meta.env.VITE_APP_KAKAO_REDIRECT_URL;
export const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;