import PostCode from "./PostCode";
import DatePicker from "./DatePicker";
import { useEffect, useState } from "react";
import Seat from "./Seat";
import "./Register.css";

const Register = () => {
  const SEATS = true;
  const [menu, setMenu] = useState(SEATS);

  const [fromAddress, setFromAddress] = useState({
    roadAddress: "출발주소",
    buildingName: "빌딩 이름",
  });
  const [toAddress, setToAddress] = useState({
    roadAddress: "도착지 주소",
    buildingName: "빌딩 이름",
  });

  const [seatNumbers, setSeatNumbers] = useState([]);

  const setAddressInfo = (address, name, setFunc) => {
    setFunc({
      roadAddress: address,
      buildingName: name,
    });
  };

  const handleSeat = () => {
    setMenu(SEATS);
  };

  const handleDateMenu = () => {
    setMenu(!SEATS);
  };

  const handleSeatNumber = () => {};

  const handleClick = () => {
    // REST 요청
  };

  useEffect(() => {
    const arr = [];
    for (let i = 1; i < 5; i++) {
      arr.push({
        id: i,
        seatState: "able",
      });
    }
    setSeatNumbers(arr);
  }, []);
  return (
    <div className='register'>
      <div className='register-text'>
        <div className='register-column'>
          <div className='register-element'>
            <div>출발지</div>

            <PostCode
              selectAddress={fromAddress}
              setAddressInfo={setAddressInfo}
              setFunc={setFromAddress}
            />
          </div>
          <div className='register-element'>
            <div>도착지</div>
            <PostCode
              selectAddress={toAddress}
              setAddressInfo={setAddressInfo}
              setFunc={setToAddress}
            />
          </div>
        </div>
        <div className='register-column'>
          <div
            onClick={handleDateMenu}
            className='register-element register-time'
          >
            <div>출발시간</div>
            <div className='from-clock'> - </div>
            <div className='from-date'> 2022년 - 월 - 일</div>
          </div>
          <div onClick={handleSeat} className='register-element register-seat'>
            <div>좌석</div>
            <div className='seat-title'> -번</div>
            <div className='seat-place'>여성 -명</div>
          </div>
          <div className='register-element'>
            <div>모집 인원</div>
            <div className='person-count'> - 명</div>
          </div>
        </div>
      </div>
      {menu ? (
        <Seat seatNumber={seatNumbers} handleSeatNumber={handleSeatNumber} />
      ) : (
        <DatePicker />
      )}
    </div>
  );
};

export default Register;
