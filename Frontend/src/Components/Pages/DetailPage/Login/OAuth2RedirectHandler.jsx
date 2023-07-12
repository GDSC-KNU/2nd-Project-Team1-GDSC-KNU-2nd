import { useDispatch } from "react-redux";
import { actionCreators as UserActions } from "../../../Store/user";
import { useEffect } from "react";

const OAuth2RedirectHandler = (props) => {
  const dispatch = useDispatch();

  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(async () => {
    await dispatch(UserActions.kakaoLogin(code));
  }, []);

  return <>로딩중입니다.</>;
};

export default OAuth2RedirectHandler;
