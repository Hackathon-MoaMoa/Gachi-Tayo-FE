import PostCode from "./PostCode";
import { useState } from "react";
import Seat from "./Seat";
import "./Register.css";

const Register = () => {
  const [fromAddress, setFromAddress] = useState({
    roadAddress: "출발주소",
    buildingName: "빌딩 이름",
  });
  const [toAddress, setToAddress] = useState({
    roadAddress: "도착지 주소",
    buildingName: "빌딩 이름",
  });

  const setAddressInfo = (address, name, setFunc) => {
    setFunc({
      roadAddress: address,
      buildingName: name,
    });
  };

  const handleClick = () => {
    // REST 요청
  };
  return (
    <div className='register'>
      <div className='register-text'>
        <div className='register-column'>
          <div className='register-element'>
            <div>출발지</div>
            <PostCode
              selectAddress={fromAddress}
              setAddressInfo={setAddressInfo}
              setFunc={setFromAddress}
            />
          </div>
          <div className='register-element'>
            <div>도착지</div>
            <PostCode
              selectAddress={toAddress}
              setAddressInfo={setAddressInfo}
              setFunc={setToAddress}
            />
          </div>
        </div>
        <div className='register-column'>
          <div className='register-element'>
            <div>출발시간</div>
          </div>
          <div className='register-element'>
            <div>좌석</div>
          </div>
          <div className='register-element'>
            <div>탑승 인원</div>
          </div>
        </div>
      </div>
      <Seat />
    </div>
  );
};

export default Register;
