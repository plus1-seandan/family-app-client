import "../scss/main.scss";
import logo from "../img/logo2-white.png";

const Header = () => {
  return (
    <>
      <div class="header__login">
        <a href="/login" class="header__login__button btn btn--white">
          Login
        </a>
      </div>
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
          <a href="register" class="btn btn--white">
            Register Now
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
