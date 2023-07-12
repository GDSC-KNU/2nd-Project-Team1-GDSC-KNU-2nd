import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./Components/Pages/DetailPage/Login/LoginPage";
import MainPage from "./Components/Pages/MainPage/MainPage";
import KaKaoCallBack from "./Components/Pages/DetailPage/Login/KaKaoCallBack";
// import ErrorPage from "./Components/Pages/DetailPage/Error/ErrorPage";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/*" element={<ErrorPage />} /> */}

        <Route path="/oauth/kakao/callback" element={<KaKaoCallBack />} />
      </Routes>
    </Fragment>
  );
}

export default App;
