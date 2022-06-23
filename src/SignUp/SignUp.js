import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Login/img/blue-logo.png";
import Pattern from "../Login/img/pattern.png";
import "./SignUp.css";

const SignUp = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [certiNumInput, setCertiNuminput] = useState("");
  const [certiNum, setCertiNum] = useState("");
  const navigate = useNavigate();

  const handleId = (e) => {
    setId(e.target.value);
  };
  const handlePw = (e) => {
    setPw(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleCertiNum = (e) => {
    setCertiNuminput(e.target.value);
  };

  const getCertiNum = () => {
    // axios 요청
    axios({
      method: "post",
      url: "https://gachi-tayo.shop/api/user/certificate",
      data: {
        phone: phone,
      },
    }).then((response) => {
      setCertiNum(response.data);
    });
  };

  const onSignUp = () => {
    if (certiNum == certiNumInput) {
      axios({
        method: "put",
        url: "https://gachi-tayo.shop/api/user/signup",
        data: {
          id: id,
          password: pw,
          name: name,
          gender: 0,
          phone: phone,
        },
      }).then(() => {
        alert("회원가입 완료.");
        navigate("/");
      });
    } else {
      alert("인증에 실패했습니다.");
    }
  };

  return (
    <div className='sign-up'>
      <img className='blue-logo' src={Logo} alt='logo' />
      <div className='sign-up-title'>회원가입</div>
      <div className='sign-up-content'>
        회원가입을 위해 간단한 정보를 기입해주세요.
      </div>
      <div className='section-one'>
        <input
          className='sign-up-name'
          placeholder='이름'
          onChange={handleName}
          value={name}
        />
        <input
          className='sign-up-phone'
          placeholder='전화번호'
          onChange={handlePhone}
          value={phone}
        />
      </div>
      <div className='section-two'>
        <input
          className='sign-up-input-certi'
          placeholder='인증번호'
          onChange={handleCertiNum}
          value={certiNumInput}
        />
        <button className='get-certi' onClick={getCertiNum}>
          인증번호 받기
        </button>
      </div>
      <input
        className='sign-up-id'
        placeholder='아이디'
        onChange={handleId}
        value={id}
      />
      <input
        className='sign-up-pw'
        placeholder='비밀번호'
        onChange={handlePw}
        value={pw}
      />

      <button className='sign-up-confirm-btn' onClick={onSignUp}>
        회원가입
      </button>
      <img className='pattern' src={Pattern} alt='pattern' />
    </div>
  );
};

export default SignUp;
