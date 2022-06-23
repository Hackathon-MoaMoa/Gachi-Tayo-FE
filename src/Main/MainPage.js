import Background from "./img/background.png";
import Slogan from "./img/slogan.png";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div>
      <img className='main-slogan' src={Slogan} alt='slogan' />
      <img className='main-background' src={Background} alt='background' />
    </div>
  );
};

export default MainPage;
