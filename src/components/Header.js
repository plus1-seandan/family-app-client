import "../css/styles.css";
import logo from "../img/logo-white.png";

const Header = () => {
  return (
    <header class="header">
      <div class="header__logo-box">
        <img src={logo} alt="Logo" class="header__logo" />
      </div>
      <div class="header__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main">Family 360</span>
          <span class="heading-primary--sub">
            Keep connected with your family
          </span>
        </h1>
        <a href="#" class="btn btn--white">
          Discover our tours
        </a>
      </div>
    </header>
  );
};

export default Header;
