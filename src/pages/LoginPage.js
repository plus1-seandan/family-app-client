import React from "react";
import Login from "../components/Login.js";
import logo from "../img/logo2-white.png";

import "../scss/main.scss";

function LoginPage() {
  return (
    <>
      <section class="section-login">
        <div class="header__logo-box">
          <img src={logo} alt="Logo" class="header__logo" />
        </div>
        <Login />
      </section>
    </>
  );
}

export default LoginPage;
