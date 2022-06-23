import React, { useEffect, useState } from "react";
import "./ReservationSearch.css";
import PostCode from "../Register/PostCode";
import ReservationButton from "./img/reservation_button.png";
import { useNavigate } from "react-router-dom";

const ReservationSearch = () => {
  const navigate = useNavigate();
  const pagenumber = useState(1);

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

  const goAbout = () => {
    const url = `/reservation/${pagenumber}`;
    navigate(url);
  };

  return (
    <div className='reservation-search'>
      <PostCode selectAddress={fromAddress} setAddress={setFromAddress} />
      <PostCode selectAddress={toAddress} setAddress={setToAddress} />
      <div className='radius'>
        <div className='radius-title'>반경</div>
        <div className='radius-content'>1km</div>
      </div>
      <button onClick={goAbout} className='reservation-btn'>
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
