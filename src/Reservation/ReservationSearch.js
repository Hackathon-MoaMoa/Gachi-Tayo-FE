import React, { useState } from "react";
import "./ReservationSearch.css";
import PostCode from "../Register/PostCode";
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
      <PostCode
        selectAddress={fromAddress}
        setAddressInfo={setAddressInfo}
        setFunc={setFromAddress}
      />
      <PostCode
        selectAddress={toAddress}
        setAddressInfo={setAddressInfo}
        setFunc={setToAddress}
      />
      <div className='radius'>
        <div>반경</div>
        <div>1km</div>
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
