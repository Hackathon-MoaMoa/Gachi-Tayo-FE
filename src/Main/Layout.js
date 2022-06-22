import { Outlet } from "react-router-dom";
import Logo from "./img/logo.png";
import Navbar from "./Navbar";
import "./Layout.css";

const Layout = () => {
  return (
    <div className='main-page'>
      <header>
        <img className='main-logo' src={Logo} alt='로고' />
        <Navbar />
        <div className='dummy'></div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
