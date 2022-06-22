import PostCode from "./PostCode";
import { useState } from "react";

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
      <div>출발지</div>
      <div>
        <p>{fromAddress.roadAddress}</p>
        <p>{fromAddress.buildingName}</p>
        <PostCode
          selectAddress={fromAddress}
          setAddressInfo={setAddressInfo}
          setFunc={setFromAddress}
        />
      </div>
      <div>도착지</div>
      <div>
        <p>{toAddress.roadAddress}</p>
        <p>{toAddress.buildingName}</p>
        <PostCode
          selectAddress={toAddress}
          setAddressInfo={setAddressInfo}
          setFunc={setToAddress}
        />
      </div>
      <div>출발시간</div>
      <div>좌석</div>
      <button onClick={handleClick}>등록하기</button>
    </div>
  );
};

export default Register;
