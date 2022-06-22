import React from "react";

const Login = () => {
  return (
    <div>
      <input className='sign-in-id' placeholder='아이디' />
      <input className='sign-in-passwd' placeholder='비밀번호' />
      <button className='login-button'>로그인</button>
      {/* 회원가입 으로 링크되는 버튼 */}
    </div>
  );
};

export default Login;
