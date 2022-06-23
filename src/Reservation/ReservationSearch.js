import React, { useEffect, useState } from "react";
import "./ReservationSearch.css";
import PostCodes from "./components/PostCodes";
import ReservationButton from "./img/reservation_button.png";
import axios from "axios";

const ReservationSearch = (props) => {
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

  const onClick = () => {
    const url = `https://gachi-tayo.shop/api/posts`;
    axios
      .get(url, {
        params: {
          start_address: fromAddress.roadAddress,
          end_address: toAddress.roadAddress,
          radius: 1,
        },
      })
      .then((response) => {
        props.setRequestArray(response.data);
        console.log("response", response.data);
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
      <button onClick={onClick} className='reservation-btn'>
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
