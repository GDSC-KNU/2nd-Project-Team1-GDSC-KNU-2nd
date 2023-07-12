import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./Components/Pages/DetailPage/Login/LoginPage";
import MainPage from "./Components/Pages/MainPage/MainPage";
// import OAuth2RedirectHandler from "./Components/Pages/DetailPage/Login/OAuth2RedirectHandler";
// import ErrorPage from "./Components/Pages/DetailPage/Error/ErrorPage";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/*" element={<ErrorPage />} />
        <Route path="/oauth" component={OAuth2RedirectHandler} /> */}
      </Routes>
    </Fragment>
  );
}

export default App;
