import axios from "axios";
import ReservationSearch from "./ReservationSearch";
import ReservationListElement from "./components/ReservationListElement";
import "./ReservationList.css";
import "./Reservation.css";
import { useEffect, useState } from "react";

const Reservation = () => {
  const [requestArray, setRequestArray] = useState([]);

  useEffect(() => {
    axios({
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      method: "get",
      url: "https://gachi-tayo.shop/api/posts",
      responseType: "json",
    }).then((response) => {
      setRequestArray(response.data);
    });
  }, []);

  return (
    <div className='reservation'>
      <ReservationSearch setRequestArray={setRequestArray} />
      <div>
        <div className='title-element'>
          <div className='title-list-element'>출발지</div>
          <div className='title-list-element'>도착지</div>
          <div className='title-list-element'>출발 일자</div>
          <div className='title-list-element'>출발 시각</div>
          <div className='title-list-element'>인원 현황</div>
        </div>
        {requestArray.map((e) => {
          return <ReservationListElement reservationContent={e} />;
        })}
      </div>
    </div>
  );
};

export default Reservation;
