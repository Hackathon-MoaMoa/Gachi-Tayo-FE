import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar">
            <ul className='navbar-nav'>
                <li>
                    <Link to='/reservation'>예약</Link>
                </li>
                <li>
                    <Link to='/register'>등록</Link>
                </li>
                <li>
                    <Link to='/history'>이용 이력</Link>
                </li>
            </ul>
        </div>
    )
};

export default Navbar;
