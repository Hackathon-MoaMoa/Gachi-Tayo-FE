import { Outlet } from "react-router-dom";
import Logo from "./img/logo.png";
import Navbar from "./Navbar";
const Layout = () => {
  return (
    <div className='main-page'>
      <header>
        <img src={Logo} alt='로고' />
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
