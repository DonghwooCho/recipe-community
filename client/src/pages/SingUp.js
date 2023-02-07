import axios from "axios";
import SignupStyle from "./Signup.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onChangeName, PUT_USER, TRY_SIGNUP } from "../modules/memberModule";
import { useNavigate } from "react-router-dom";
import {
  signupSuccessAlert,
  loginFailAlert,
} from "../components/common/alertDesign";

function SignUp() {
  const navigate = useNavigate();
  const member = useSelector((state) => state.memberReducer[0]);
  console.log("state : ", member);

  const dispatch = useDispatch();

  const signup = async () => {
    const signupMember = await axios({
      method: "post",
      url: "http://localhost:5000/member/signup",
      data: {
        name: member.name,
        age: member.age,
        id: member.id,
        password: member.password,
      },
    }).catch((err) => console.log("서버 응답 대기 중"));

    console.log(signupMember);

    switch (signupMember.status) {
      case 200:
        signupSuccessAlert();
        navigate("../");
        break;
      //case 401: signupSuccessAlert(); break;
    }
  };

  const onChangeHandler = (e) => {
    dispatch({ type: TRY_SIGNUP, payload: e.target });
    console.log(member);
  };

  return (
    <div className={SignupStyle.body}>
      <h1>회원가입</h1>
      {/* <label>이름 : </label> */}
      <input
        className={SignupStyle.inputName}
        onChange={onChangeHandler}
        placeholder=" 이름을 입력하세요"
        type="text"
        name="name"
        id="name"
      />
      <br />
      {/* <label>나이 : </label> */}
      <input
        className={SignupStyle.inputAge}
        onChange={onChangeHandler}
        placeholder=" 나이를 입력하세요"
        type="text"
        name="age"
        id="age"
      />
      <br />
      {/* <label>아이디 : </label> */}
      <input
        className={SignupStyle.inputId}
        onChange={onChangeHandler}
        placeholder=" 아이디를 입력하세요"
        type="text"
        name="id"
        id="id"
      />
      <br />
      {/* <label>비밀번호 : </label> */}
      <input
        className={SignupStyle.inputPassword}
        onChange={onChangeHandler}
        placeholder=" 비밀번호를 입력하세요"
        type="password"
        name="password"
        id="password"
      />
      <br />
      {/* <label>비밀번호 확인: </label>
                <input type="password" name="passwordCheck"
                id="passwordCheck" value={ passwordCheck }
                onChange={ onChangePasswordCheck }/><br/> */}
      <button className={SignupStyle.signup} type="submit" onClick={signup}>
        회원 가입
      </button>
    </div>
  );
}

export default SignUp;
