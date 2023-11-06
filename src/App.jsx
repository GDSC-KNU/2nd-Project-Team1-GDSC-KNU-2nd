import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/pages/DetailPage/Auth/LoginPage";
import MainPage from "./components/Pages/MainPage/MainPage";
import KaKaoCallBack from "./components/pages/DetailPage/Auth/KaKaoCallBack";
import ErrorPage from "./components/pages/DetailPage/Error/ErrorPage";
import MyPage from "./components/pages/DetailPage/MyPage/MyPage";
import Recording from "./components/pages/DetailPage/Record/Recording";
import Create from "./components/pages/DetailPage/Create/Create";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/oauth" element={<KaKaoCallBack />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/recording" element={<Recording />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
