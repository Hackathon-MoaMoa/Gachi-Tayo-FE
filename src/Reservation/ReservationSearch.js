import React, { useEffect, useState } from "react";
import "./ReservationSearch.css";
import PostCodes from "./components/PostCodes";
import ReservationButton from "./img/reservation_button.png";

const ReservationSearch = () => {
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

  return (
    <div className='reservation-search'>
      <PostCodes selectAddress={fromAddress} setAddress={setFromAddress} />
      <PostCodes selectAddress={toAddress} setAddress={setToAddress} />
      <div className='radius'>
        <div className='radius-title'>반경</div>
        <div className='radius-content'>1km</div>
      </div>
      <button className='reservation-btn'>
        <img
          className='reservation-btn-img'
          src={ReservationButton}
          alt='예약하기'
        />
      </button>
    </div>
  );
};

export default ReservationSearch;
