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

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<MainPage />} />
        <Route path='/reservation/:pagenumber' element={<About />} />
        <Route path='/reservation' element={<Reservation />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register_success' element={<RegisterSuccess />} />
        <Route path='/history' element={<History />} />
      </Route>
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
