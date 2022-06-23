import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import Layout from "./Main/Layout";
import MainPage from "./Main/MainPage";
import Register from "./Register/Register";
import Reservation from "./Reservation/Reservation";
import History from "./History/History";
import About from "./Reservation/About";
import RegisterSuccess from "./Register/RegisterSuccess";
import ReservationSuccess from "./Reservation/ReservationSuccess";
import SignUp from "./SignUp/SignUp";

function App() {
  const [userIdNumber, setUserIdNumber] = useState(1);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<MainPage />} />
        <Route path='/reservation/:pagenumber' element={<About />} />
        <Route path='/reservation' element={<Reservation />} />
        <Route path='/reservation_success' element={<ReservationSuccess />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register_success' element={<RegisterSuccess />} />
        <Route path='/history' element={<History />} />
      </Route>
      <Route
        path='/login'
        element={<Login />}
        setUserIdNumber={setUserIdNumber}
      />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  );
}

export default App;
