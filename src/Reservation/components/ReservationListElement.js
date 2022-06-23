import "./ReservationListElement.css";

const ReservationListElement = (props) => {
  return (
    <div className='list-element'>
      <div className='element'>{props.reservationContent.fromAddress}</div>
      <div className='element'>{props.reservationContent.toAddress}</div>
      <div className='element'>{props.reservationContent.startDate}</div>
      <div className='element'>{props.reservationContent.startTime}</div>
      <div className='element'>{props.reservationContent.remainSeat}</div>
    </div>
  );
};

export default ReservationListElement;
