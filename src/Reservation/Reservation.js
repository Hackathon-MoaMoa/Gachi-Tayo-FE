import ReservationSearch from "./ReservationSearch";
import ReservationList from "./ReservationList";
import "./Reservation.css";

const Reservation = () => {
  return (
    <div className='reservation'>
      <ReservationSearch />
      <ReservationList />
    </div>
  );
};

export default Reservation;
