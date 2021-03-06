import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const activeStyle = {
    textDecoration: "none",
    color: "black",
    paddingBottom: "6px",
    borderBottom: "4px solid black",
  };

  const inActiveStyle = {
    textDecoration: "none",
    color: "black",
    paddingBottom: "6px",
  };
  return (
    <div className='navbar-div'>
      <ul className='navbar'>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            to='/reservation'
          >
            가치 타기
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            to='/register'
          >
            가치 타요
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            to='/history'
          >
            이용 이력
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
