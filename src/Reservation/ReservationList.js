import { useState } from "react";
import ReservationListElement from "./components/ReservationListElement";

const ReservationList = () => {
  const [requestData, setRequestData] = useState([1, 2, 3, 4]);
  return (
    <div>
      {requestData.map((e) => {
        return <ReservationListElement />;
      })}
    </div>
  );
};

export default ReservationList;
