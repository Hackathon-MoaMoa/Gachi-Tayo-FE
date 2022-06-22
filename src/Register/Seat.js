import { useState } from "react";
import "./Seat.css";
import SeatDisable from "./img/seat_disable.png";
import Seat1 from "./img/seat1.png";
import Seat2 from "./img/seat2.png";
import Seat3 from "./img/seat3.png";
import Seat4 from "./img/seat4.png";

const Seat = (props) => {
  return (
    <div className='seat'>
      <div className='front-seat'>
        <img className='seat-img' src={SeatDisable} alt='driver' />
        <img className='seat-img' src={Seat1} alt='1' />
      </div>
      <div className='back-seat'>
        <img className='seat-img' src={Seat2} alt='2' />
        <img className='seat-img' src={Seat3} alt='3' />
        <img className='seat-img' src={Seat4} alt='4' />
      </div>

      {/*
       */}
    </div>
  );
};

export default Seat;
