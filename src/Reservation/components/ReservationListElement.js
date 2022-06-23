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

  return (
    <div onClick={onClick} className='list-element'>
      <div className='element'>{props.reservationContent.startName}</div>
      <div className='element'>{props.reservationContent.endName}</div>
      <div className='element'>{`${props.reservationContent.startDate.substr(
        0,
        4
      )}년 ${props.reservationContent.startDate.substr(
        5,
        2
      )}월 ${props.reservationContent.startDate.substr(8, 2)}일`}</div>
      <div className='element'>{`${props.reservationContent.startDate.substr(
        11,
        2
      )}:${props.reservationContent.startDate.substr(14, 2)}`}</div>
      <div className='element'>{`${props.reservationContent.currentMember}명 / ${props.reservationContent.totalMember}명`}</div>
    </div>
  );
};

export default ReservationListElement;
