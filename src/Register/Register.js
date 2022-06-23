import PostCode from "./PostCode";
import DatePicker from "./DatePicker";
import { useEffect, useState } from "react";
import Seat from "./Seat";
import "./Register.css";
import NextButton from "./img/next_button.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const SEATS = true;
  const UID = 1;

  const navigate = useNavigate();

  const [writeDto, setWriteDto] = useState({
    p_id: -1,
    u_id: UID,
    start_address: "",
    start_name: "",
    end_address: "",
    end_name: "",
    start_date: "",
    total_number: 4,
    current_number: 1,
    done: 0,
  });

  const [fromAddress, setFromAddress] = useState({
    roadAddress: "출발주소",
    buildingName: "빌딩 이름",
  });

  const [toAddress, setToAddress] = useState({
    roadAddress: "도착지 주소",
    buildingName: "빌딩 이름",
  });

  const [dateFormat, setDateFormat] = useState("");

  const [time, setTime] = useState("00-00");
  const [ymd, setYmd] = useState("0000-00-00");
  const [menu, setMenu] = useState(SEATS);

  const [seatNumber, setSeatNumber] = useState(0);

  useEffect(() => {
    console.log("use Effect!");

    setWriteDto({
      p_id: -1,
      u_id: UID,
      start_address: fromAddress.roadAddress,
      start_name: fromAddress.buildingName,
      end_address: toAddress.roadAddress,
      end_name: toAddress.buildingName,
      start_date: dateFormat,
      total_number: 4,
      current_number: 1,
      done: 0,
    });
  }, [dateFormat, fromAddress, toAddress, seatNumber]);

  const handleSeat = () => {
    setMenu(SEATS);
  };

  const handleDateMenu = () => {
    setMenu(!SEATS);
  };

  const handleSeatNumber = (number) => {
    setSeatNumber(number);
  };

  const handleClick = () => {
    console.dir(writeDto);
    axios({
      method: "post",
      url: "/api/posts/write",
      data: writeDto,
    }).then(() => {
      navigate("/register_success");
    });
  };

  return (
    <div className='register'>
      <button onClick={handleClick} className='register-btn'>
        <img className='register-btn-img' src={NextButton} alt='nextbutton' />
      </button>
      <div className='register-text'>
        <div className='register-column'>
          <div className='register-element'>
            <div>출발지</div>

            <PostCode selectAddress={fromAddress} setAddress={setFromAddress} />
          </div>
          <div className='register-element'>
            <div>도착지</div>
            <PostCode selectAddress={toAddress} setAddress={setToAddress} />
          </div>
        </div>
        <div className='register-column'>
          <div
            onClick={handleDateMenu}
            className='register-element register-time'
          >
            <div>출발시간</div>
            <div className='from-clock'> {time} </div>
            <div className='from-date'> {ymd}</div>
          </div>
          <div onClick={handleSeat} className='register-element register-seat'>
            <div>좌석</div>
            <div className='seat-title'>
              {seatNumber == 0 ? "-" : seatNumber}번
            </div>
            {/* <div className='seat-place'>여성 -명</div> */}
          </div>
          <div className='register-element'>
            <div>모집 인원</div>
            <div className='person-count'> 4명</div>
          </div>
        </div>
      </div>
      {menu ? (
        <Seat handleSeatNumber={handleSeatNumber} />
      ) : (
        <DatePicker
          setDateFormat={setDateFormat}
          setTime={setTime}
          setYmd={setYmd}
        />
      )}
    </div>
  );
};

export default Register;
