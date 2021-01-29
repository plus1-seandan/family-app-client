import React from "react";
import Register from "../components/Register.js";

import "../scss/main.scss";
import logo from "../img/logo2-white.png";

function RegisterPage() {
  return (
    <>
      <section class="section-register">
        <div class="header__logo-box">
          <img src={logo} alt="Logo" class="header__logo" />
        </div>
        <Register />
      </section>
    </>
  );
}

export default RegisterPage;
