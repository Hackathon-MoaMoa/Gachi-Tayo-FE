import { useNavigate } from "react-router-dom";
import "./ReservationListElement.css";

const ReservationListElement = (props) => {
  const navi = useNavigate();
  const pagenumber = 1;
  const onClick = () => {
    const url = `/reservation/${pagenumber}`;
    navi(url);
  };
  return (
    <div onClick={onClick} className='list-element'>
      <div className='element'>{props.reservationContent.fromAddress}</div>
      <div className='element'>{props.reservationContent.toAddress}</div>
      <div className='element'>{props.reservationContent.startDate}</div>
      <div className='element'>{props.reservationContent.startTime}</div>
      <div className='element'>{props.reservationContent.remainSeat}</div>
    </div>
  );
};

export default ReservationListElement;
