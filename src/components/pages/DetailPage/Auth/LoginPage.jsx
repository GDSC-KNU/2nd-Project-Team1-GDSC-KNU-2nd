import "./LoginPage.css";
import Logo from "../../../../assets/Logo.png";
import kakaoBtn from "../../../../assets/kakao_login.png";
//import { KAKAO_AUTH_URI } from "../../../../Constants/OAuth";

const LoginPage = () => {
  const REST_API_KEY = "328cab67369f3a5fd57c0f12d10037aa"; //REST API KEY
  const REDIRECT_URI = "http://localhost:5173/oauth"; //Redirect URI
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URI;
  };

  return (
    <div className="pageBox">
      <div className="titleBox">
        <img src={Logo} alt="로고입니다." />
        <h1>우리 어디가</h1>
        <h2>AI가 짜주는 여행 일정, 새로운 경험을 만나다.</h2>
      </div>
      <img
        src={kakaoBtn}
        alt="카카오 로그인 버튼입니다."
        className="kakaoBtn"
        onClick={handleLogin}
      />
    </div>
  );
};
export default LoginPage;
