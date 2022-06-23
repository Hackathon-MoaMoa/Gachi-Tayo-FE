import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const About = () => {
  // 페이지 번호
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

  return (
    <div>
      <div className='about-content'>
        <div className='element'>
          <div>출발지</div>
          <div>{fromBuildingName}</div>
          <div>{fromRoadAddress}</div>
        </div>
        <div className='element'>
          <div>도착지</div>
          <div>{toBuildingName}</div>
          <div>{toRoadAddress}</div>
        </div>
        <div className='element'>
          <div>출발 시각</div>
          <div>{time}</div>
          <div>{date}</div>
        </div>
        <div className='element'>
          <div>예약 가능 인원</div>
        </div>
      </div>
    </div>
  );
};

export default About;
