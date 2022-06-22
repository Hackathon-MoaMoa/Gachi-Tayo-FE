import { useState } from "react";
import "./Seat.css";
import SeatDisable from "./img/seat_disable.png";
import SeatCheck from "./img/check_seat.png";
import Seat1 from "./img/seat1.png";
import Seat2 from "./img/seat2.png";
import Seat3 from "./img/seat3.png";
import Seat4 from "./img/seat4.png";

const Seat = () => {
  const [checkSeat, setCheckSeat] = useState(0);

  const onCheck = (e) => {
    setCheckSeat(parseInt(e.target.alt));
  };

  const onUnCheck = () => {
    setCheckSeat(0);
  };

  return (
    <div className='seat'>
      <div className='front-seat'>
        <img className='seat-img' src={SeatDisable} alt='driver' />
        {checkSeat === 1 ? (
          <img
            key='1'
            onClick={onUnCheck}
            className='seat-img'
            src={SeatCheck}
            alt='1'
          />
        ) : (
          <img
            key='1'
            onClick={onCheck}
            className='seat-img'
            src={Seat1}
            alt='1'
          />
        )}
      </div>
      <div className='back-seat'>
        {checkSeat === 2 ? (
          <img
            key='2'
            onClick={onUnCheck}
            className='seat-img'
            src={SeatCheck}
            alt='2'
          />
        ) : (
          <img
            key='2'
            onClick={onCheck}
            className='seat-img'
            src={Seat2}
            alt='2'
          />
        )}
        {checkSeat === 3 ? (
          <img
            key='3'
            onClick={onUnCheck}
            className='seat-img'
            src={SeatCheck}
            alt='3'
          />
        ) : (
          <img
            key='3'
            onClick={onCheck}
            className='seat-img'
            src={Seat3}
            alt='3'
          />
        )}
        {checkSeat === 4 ? (
          <img
            key='4'
            onClick={onUnCheck}
            className='seat-img'
            src={SeatCheck}
            alt='4'
          />
        ) : (
          <img
            key='4'
            onClick={onCheck}
            className='seat-img'
            src={Seat4}
            alt='4'
          />
        )}
      </div>
    </div>
  );
};

export default Seat;
