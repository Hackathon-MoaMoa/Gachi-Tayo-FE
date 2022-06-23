import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <input placeholder='아이디' onChange={handleId} value={id} />
      <input placeholder='비밀번호' onChange={handlePw} value={pw} />
      <input placeholder='이름' onChange={handleName} value={name} />
      <input placeholder='전화번호' onChange={handlePhone} value={phone} />
      <input
        placeholder='인증번호'
        onChange={handleCertiNum}
        value={certiNumInput}
      />
      <button onClick={getCertiNum}>인증번호 받기</button>
      <button onClick={onSignUp}>회원가입</button>
    </div>
  );
};

export default SignUp;
