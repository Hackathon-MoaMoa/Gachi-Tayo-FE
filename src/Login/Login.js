import React from "react";
import Logo from "./img/blue-logo.png";

const Login = () => {
  return (
    <div>
      <img src={Logo} alt='logo' />
      <input className='sign-in-id' placeholder='아이디' /> <br />
      <input className='sign-in-passwd' placeholder='비밀번호' /> <br />
      <button className='login-button'>로그인</button>
      {/* 회원가입 으로 링크되는 버튼 */}
    </div>
  );
};

export default Login;
