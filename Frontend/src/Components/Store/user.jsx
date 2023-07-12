const kakaoLogin = (code) => {
  return function (disaptch, getState, { history }) {
    axios({
      method: "GET",
      url: `http://localhost:5173/oauth?code=${code}`,
    })
      .then((res) => {
        console.log(res);

        const ACCESS_TOKEN = res.data.access_token;

        localStorage.setItem("token", ACCESS_TOKEN);

        history.replace("/");
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패했습니다.");
        history.replace("/login");
      });
  };
};
