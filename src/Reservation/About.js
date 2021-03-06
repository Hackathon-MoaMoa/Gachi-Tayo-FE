import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import "./About.css";
import NextButton from "./img/next_button.png";

const UID = 3;
const About = () => {
  // 페이지 번호
  const navigate = useNavigate();
  const params = useParams();
  const requestData = useState({});
  const [fromBuildingName, setFromBuildingName] = useState("시작주소");
  const [fromRoadAddress, setFromRoadAddress] = useState("출발지 도로명 주소");
  const [toBuildingName, setToBuildingName] = useState("도착주소");
  const [toRoadAddress, setToRoadAddress] = useState("도착지 도로명 주소");
  const [time, setTime] = useState("00:00 AM");
  const [date, setDate] = useState("2022년 06월 23일");
  const [personCount, setPersonCount] = useState("2명 / 4명");
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [endX, setEndX] = useState(0);
  const [endY, setEndY] = useState(0);
  const [name, setName] = useState("이윤성");
  const [uid, setUid] = useState(0);
  const [pid, setPid] = useState(0);

  useEffect(() => {
    axios({
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      method: "get",
      url: `https://gachi-tayo.shop/api/posts/${params.pagenumber}`,
      responseType: "json",
    }).then((response) => {
      console.log(response.data);
      setToBuildingName(response.data.endName);
      setToRoadAddress(response.data.endAddress);
      setFromBuildingName(response.data.startName);
      setFromRoadAddress(response.data.startAddress);
      setStartX(response.data.startX);
      setStartY(response.data.startY);
      setEndX(response.data.endX);
      setEndY(response.data.endY);
      setName(response.data.name);
      setPid(response.data.pid);
      setUid(response.data.uid);
      setTime(
        `${response.data.hour}:${response.data.minute}${
          response.data.hour >= 12 ? "PM" : "AM"
        }`
      );
      setDate(
        `${response.data.year}년 ${response.data.month}월 ${response.data.day}일`
      );
      const personFormat = `${response.data.remainMember}명/ ${response.data.totalMember}명`;
      setPersonCount(personFormat);
    });
  }, []);

  const onClick = () => {
    axios({
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      method: "post",
      url: "https://gachi-tayo.shop/api/reservation",
      data: {
        u_id: UID,
        p_id: pid,
        seat_number: 4,
      },
    }).then(function (response) {
      console.log(response.data);
      navigate("/reservation_success");
    });
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
        center={{ lat: startY, lng: startX }}
        style={{ width: "1155px", height: "700px" }}
      >
        <MapMarker position={{ lat: startY, lng: startX }}></MapMarker>
        <MapMarker position={{ lat: endY, lng: endX }}></MapMarker>
      </Map>
    </div>
  );
};

export default About;
