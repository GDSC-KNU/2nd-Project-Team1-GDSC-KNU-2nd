import "./LoginPage.css";
import Logo from "../../../../assets/Logo.png";
import kakaoBtn from "../../../../assets/kakao_login.png";
import { KAKAO_AUTH_URI } from "../../../../Constants/OAuth";

const LoginPage = () => {

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
