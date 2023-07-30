// import { REST_API_KEY, REDIRECT_URI } from "../../../../Constants/OAuth";
// import axios from "axios";
// import { useEffect } from "react";

const KaKaoCallBack = () => {
  
//   useEffect(() => {
//     const code = new URL(window.location.href).searchParams.get("code");
//       const grant_type = "authorization_code";

//       axios
//         .post(
//           `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
//           {},
//           {
//             headers: {
//               "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
//             },
//           }
//         )
//         .then((res) => {
//           console.log("데이터 성공: ");
//           console.log(res);
//         });
//   }, [code]);
  

  return <>Loading,,,</>;
};

export default KaKaoCallBack;
