import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/pages/DetailPage/Auth/LoginPage";
import MainPage from "./components/Pages/MainPage/MainPage";
import KaKaoCallBack from "./components/pages/DetailPage/Auth/KaKaoCallBack";
// import ErrorPage from "./Components/Pages/DetailPage/Error/ErrorPage";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/*" element={<ErrorPage />} /> */}

        <Route path="/oauth" element={<KaKaoCallBack />} />
      </Routes>
    </Fragment>
  );
}

export default App;
