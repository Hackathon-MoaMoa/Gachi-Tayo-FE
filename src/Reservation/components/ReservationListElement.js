import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ReservationListElement.css";

const ReservationListElement = (props) => {
  const navi = useNavigate();
  const [pageNum, setPageNum] = useState(0);

  useEffect(() => {
    console.log(props.reservationContent);
    setPageNum(props.reservationContent.pid);
  }, []);
  const onClick = () => {
    const url = `/reservation/${pageNum}`;
    navi(url);
  };

  console.log();
  return (
    <div onClick={onClick} className='list-element'>
      <div className='element'>{props.reservationContent.startAddress}</div>
      <div className='element'>{props.reservationContent.endAddress}</div>
      <div className='element'>{props.reservationContent.startDate}</div>
      <div className='element'>{props.reservationContent.startTime}</div>
      <div className='element'>{props.reservationContent.remainSeat}</div>
    </div>
  );
};

export default ReservationListElement;
