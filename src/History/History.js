import React, { useState, useEffect } from "react";
import HistoryTable from "./HistoryTable";
import "./History.css";
import axios from "axios";

const History = () => {
  const UID = 1;
  const [rideOks, setRideOks] = useState([]);
  const [rideWaits, setRideWaits] = useState([]);

  useEffect(() => {
    axios({
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      method: "get",
      url: `https://gachi-tayo.shop/api/reservation/history/done/${UID}`,
      responseType: "json",
    }).then((response) => {
      const data = response.data;
      setRideOks(data);
      console.log("평가 가능:", response.data);
    });

    axios({
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      method: "get",
      url: `https://gachi-tayo.shop/api/reservation/history/${UID}`,
      responseType: "json",
    }).then((response) => {
      const data = response.data;
      setRideWaits(data);
      console.log("평가 불가능:", response.data);
    });
  }, []);

  return (
    <div className='history-main'>
      <div className='history-title'>
        평가 대기 중인{" "}
        <span className='history-title-thin'>작성한 글 ({rideOks.length})</span>
      </div>
      <HistoryTable rideState={true} rideArray={rideOks} />
      <div
        style={{
          borderBottom: "1px solid",
          borderColor: "#d9d9d9",
          width: "100%",
          paddingTop: "3rem",
        }}
      ></div>
      <div className='history-title'>
        평가 대기 중인{" "}
        <span className='history-title-thin'>
          예약한 글 ({rideWaits.length})
        </span>
      </div>
      <HistoryTable rideState={false} rideArray={rideWaits} />
      <div
        style={{
          borderBottom: "1px solid",
          borderColor: "#d9d9d9",
          width: "100%",
          marginBottom: "75px",
          paddingTop: "3rem",
        }}
      ></div>
    </div>
  );
};

export default History;
