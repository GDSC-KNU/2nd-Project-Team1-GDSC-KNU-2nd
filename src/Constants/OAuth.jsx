export const REST_API_KEY = `${process.env.REACT_APP_RESTAPI_KAKAO_APP_KEY}`; //REST API KEY
export const REDIRECT_URI = `${process.env.REACT_APP_KAKAO_REDIRECT_URL}`; //Redirect URI
export const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;