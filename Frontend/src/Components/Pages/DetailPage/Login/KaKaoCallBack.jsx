import { useEffect } from "react";

const KaKaoCallBack = () => {
    const code = new URL(window.location.href).searchParams.get("code");
    const REST_API_KEY = "328cab67369f3a5fd57c0f12d10037aa"; //REST API KEY
    const REDIRECT_URI = "http://localhost:5173/oauth";
};

export default KaKaoCallBack;