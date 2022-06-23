import axios from "axios";
import ReservationSearch from "./ReservationSearch";
import ReservationList from "./ReservationList";
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
      <ReservationSearch />
      <ReservationList requestArray={requestArray} />
    </div>
  );
};

export default Reservation;
