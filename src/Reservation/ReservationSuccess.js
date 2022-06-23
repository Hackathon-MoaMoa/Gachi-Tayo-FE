import ReservationSuccessImg from "./img/reservation_success_img.png";

const ReservationSuccess = () => {
  return (
    <div>
      <img
        style={{
          position: "absolute",
          top: "224px",
          left: "551px",
          width: "461px",
          height: "400px",
        }}
        src={ReservationSuccessImg}
        alt='reservation-success-img'
      />
    </div>
  );
};

export default ReservationSuccess;
