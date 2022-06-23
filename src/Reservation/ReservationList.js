import { useState } from "react";
import DummyData from "./components/DummyData";
import ReservationListElement from "./components/ReservationListElement";
import "./ReservationList.css";

const ReservationList = () => {
  const [requestData, setRequestData] = useState(DummyData);
  return (
    <div>
      <div className='title-element'>
        <div className='title-list-element'>출발지</div>
        <div className='title-list-element'>도착지</div>
        <div className='title-list-element'>출발 일자</div>
        <div className='title-list-element'>출발 시각</div>
        <div className='title-list-element'>인원 현황</div>
      </div>
      {requestData.map((e) => {
        return <ReservationListElement reservationContent={e} />;
      })}
    </div>
  );
};

export default ReservationList;
