import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./img/blue-logo.png";
import Pattern from "./img/pattern.png";
import "./Login.css";

const Login = (props) => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onIdChange = (e) => {
    setId(e.target.value);
  };
  const onPwChange = (e) => {
    setPw(e.target.value);
  };

  const onClick = () => {
    axios({
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      method: "post",
      url: "https://gachi-tayo.shop/api/user/login",
      data: {
        id: id,
        password: pw,
      },
    }).then((response) => {
      console.log(response.data);
      if (response.data == 1) {
        alert("로그인 성공!");
        props.setUserIdNumber(response.data);
        navigate("/");
      } else {
        alert("로그인 실패!");
      }
    });
  };

  const onSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className='login'>
      <img className='blue-logo' src={Logo} alt='logo' />
      <br />
      <div className='login-title'>로그인</div>
      <div className='login-text'>택시 합승자 매칭 웹 서비스</div>
      <input
        onChange={onIdChange}
        type='text'
        className='sign-in-id'
        placeholder='아이디'
        value={id}
      />

      <input
        onChange={onPwChange}
        type='password'
        className='sign-in-passwd'
        placeholder='비밀번호'
        value={pw}
      />
      <button onClick={onClick} className='login-button'>
        로그인
      </button>
      <div onClick={onSignUp} className='sign-up-button'>
        회원가입
      </div>
      <img className='pattern' src={Pattern} alt='pattern' />
    </div>
  );
};

export default Login;
