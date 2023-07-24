import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/pages/DetailPage/Auth/LoginPage";
import MainPage from "./components/Pages/MainPage/MainPage";
import KaKaoCallBack from "./components/pages/DetailPage/Auth/KaKaoCallBack";
// import ErrorPage from "./Components/Pages/DetailPage/Error/ErrorPage";
import MyPage from "./components/pages/DetailPage/MyPage/MyPage";
import Recording from "./components/pages/DetailPage/Record/Recording";
import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";

function App() {
  const isDesktop = useMediaQuery({
    query: "(min-width:280px)",
  });
  return (
    <Fragment>
      <Routes>
        {isDesktop && <Route path="/" element={<MainPage />} />}
        {isDesktop && <Route path="/login" element={<LoginPage />} />}
        {/* <Route path="/*" element={<ErrorPage />} /> */}
        {isDesktop && <Route path="/mypage" element={<MyPage />} />}
        {isDesktop && <Route path="/oauth" element={<KaKaoCallBack />} />}
        {isDesktop && <Route path="/recording" element={<Recording />} />}
      </Routes>
    </Fragment>
  );
}

export default App;
