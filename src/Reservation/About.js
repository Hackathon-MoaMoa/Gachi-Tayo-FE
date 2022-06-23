import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import "./About.css";
import NextButton from "./img/next_button.png";

const About = () => {
  // 페이지 번호
  const navigate = useNavigate();
  const params = useParams();
  const [pageNumber, setPageNumber] = useState(0);
  const [fromBuildingName, setFromBuildingName] = useState("시작주소");
  const [fromRoadAddress, setFromRoadAddress] = useState("출발지 도로명 주소");
  const [toBuildingName, setToBuildingName] = useState("도착주소");
  const [toRoadAddress, setToRoadAddress] = useState("도착지 도로명 주소");
  const [time, setTime] = useState("00:00 AM");
  const [date, setDate] = useState("2022년 06월 23일");
  const [personCount, setPersonCount] = useState("2명 / 4명");
  useEffect(() => {
    setPageNumber(params.pagenumber);
  }, []);

  const onClick = () => {
    navigate("/reservation_success");
  };
  return (
    <div className='about'>
      <div className='about-content'>
        <div className='about-element'>
          <div className='about-element-title'>출발지</div>
          <div className='about-bold'>{fromBuildingName}</div>
          <div className='about-detail'>{fromRoadAddress}</div>
        </div>
        <div className='about-element'>
          <div className='about-element-title'>도착지</div>
          <div className='about-bold'>{toBuildingName}</div>
          <div className='about-detail'>{toRoadAddress}</div>
        </div>
        <div className='about-element'>
          <div className='about-element-title'>출발 시각</div>
          <div className='about-bold'>{time}</div>
          <div className='about-detail'>{date}</div>
        </div>
        <div className='about-element'>
          <div className='about-element-title'>예약 가능 인원</div>
          <div className='about-bold'>{personCount}</div>

          <button onClick={onClick} className='reservation-success-btn'>
            <img
              className='reservation-success-img'
              src={NextButton}
              alt='reservation button'
            />
          </button>
        </div>

        <div className='about-description'>
          화살표 버튼을 누르면 예약이 완료됩니다.
        </div>
      </div>
      <Map
        className='kakao-map'
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: "1155px", height: "700px" }}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}></MapMarker>
        <MapMarker position={{ lat: 33.55635, lng: 125.795853 }}></MapMarker>
      </Map>
    </div>
  );
};

export default About;
