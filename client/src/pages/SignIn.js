import axios from "axios";
import SigninStyle from "./Signin.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TRY_LOGIN } from "../modules/memberModule";
import { useCookies } from "react-cookie";
import { LOGIN } from "../modules/authModule";
import {
  loginSuccessAlert,
  loginFailAlert,
} from "../components/common/alertDesign";

function SignIn() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies([""]);

  const member = useSelector((state) => state.memberReducer[0]);
  const authResult = useSelector((state) => state.authReducer);

  console.log("로그인 시도 회원 정보 : ", member);

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    dispatch({ type: TRY_LOGIN, payload: { event: e.target } });
  };

  // 로그인
  const onClickHandler = async () => {
    const loginMember = await axios({
      method: "post",
      url: "http://localhost:5000/member/signin",
      data: {
        id: member.id,
        password: member.password,
      },
    }).catch((err) => loginFailAlert());

    const currentTime = new Date();

    currentTime.setSeconds(currentTime.getSeconds() + 7);
    const accessTokenTime = currentTime;

    currentTime.setDate(currentTime.getDate() + 3);
    const refreshTokenTime = currentTime;

    // Token Cookie에 저장
    setCookie("accessToken", loginMember.data.result[1], {
      path: "/",
      expires: accessTokenTime,
      httpOnly: true,
    });
    setCookie("refreshToken", loginMember.data.result[2], {
      path: "/",
      expires: refreshTokenTime,
      httpOnly: true,
    });

    localStorage.setItem("accessToken", cookies.accessToken);
    console.log(localStorage.getItem("accessToken"));

    // httpOnly: true 이므로 undefined 출력
    //console.log(cookies.accessToken);
    //console.log(cookies.refreshToken);

    //console.log(loginMember.status)
    try {
      switch (loginMember.status) {
        case 200:
          loginSuccessAlert(loginMember.data.result[0].name);
          break;
      }
    } catch (e) {
      loginFailAlert();
      navigate("./");
    }

    const auth = await axios("http://localhost:5000/auth", {
      headers: { accessToken: loginMember.data.result[1] },
    });
    console.log({ member: member, token: auth.config.headers.accessToken });
    dispatch({
      type: LOGIN,
      payload: { member: member, token: auth.config.headers.accessToken },
    });
    //console.log('111111111111111', authResult[0])

    // 아래 값 localstorage에 저장 => 새로 고침해도 괜찮음
    console.log("asas", auth.config.headers.accessToken);
    if (auth.config.headers.accessToken) {
      navigate("../");
    }
  };

  const onKeyUpHandler = () => {
    if (window.event.keyCode == 13) {
      onClickHandler();
    }
  };

  // const onLoginSuccess = (res) => {

  //     // 구조분해할당
  //     const { accessToken } = res.data;

  //     // accessToken 설정
  //     axios.defaults.headers.common['Autorization'] = `Bearer${accessToken}`;

  //     // accessToken 만료 1분 전 로그인 연장
  //     setTimeout(
  //         axios({
  //             method: "post",
  //             url: "http://localhost:5000/member/refresh",
  //             data:
  //             {
  //                 id: member.id,
  //                 password: member.password
  //             }
  //         }), ((24 * 3600 * 1000) - (60 * 1000))
  //     );
  // }

  return (
    <div className={SigninStyle.body}>
      <h1>로그인</h1>

      <label htmlFor="id"></label>
      <br />
      <input
        className={SigninStyle.inputId}
        type="text"
        name="id"
        id="id"
        autoFocus
        placeholder=" 아이디를 입력하세요"
        onChange={onChangeHandler}
        onKeyUp={onKeyUpHandler}
      />
      <br />

      <label htmlFor="content"></label>
      <br />
      <input
        className={SigninStyle.inputPassword}
        type="password"
        name="password"
        id="password"
        placeholder=" 비밀번호를 입력하세요"
        onChange={onChangeHandler}
        onKeyUp={onKeyUpHandler}
      />
      <br />

      <button
        className={SigninStyle.login}
        type="submit"
        onClick={onClickHandler}
      >
        로그인
      </button>
      <br />
    </div>
  );
}

export default SignIn;
