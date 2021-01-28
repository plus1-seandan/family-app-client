import "../scss/main.scss";
import logo from "../img/logo-white.png";
import nat1 from "../img/nat-1-large.jpg";
import nat2 from "../img/nat-2-large.jpg";
import nat3 from "../img/nat-3-large.jpg";

const Header = () => {
  return (
    <>
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
      <main>
        <section class="section-about">
          <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary">
              Connecting with family has never been easier
            </h2>
          </div>
          <div class="row">
            <div class="col-1-of-2">
              <h3 class="heading-tertiary u-margin-bottom-small">
                Keep in touch with family whereever you are
              </h3>
              <p class="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>

              <h3 class="heading-tertiary u-margin-bottom-small">
                Live adventures like you never have before
              </h3>
              <p class="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores nulla deserunt voluptatum nam.
              </p>

              <a href="#" class="btn-text">
                Learn more &rarr;
              </a>
            </div>
            <div class="col-1-of-2">
              <div class="composition">
                <img
                  src={nat1}
                  alt="nature 1"
                  class="composition__photo composition__photo--p1"
                />
                <img
                  src={nat2}
                  alt="nature 2"
                  class="composition__photo composition__photo--p2"
                />
                <img
                  src={nat3}
                  alt="nature 3"
                  class="composition__photo composition__photo--p3"
                />
              </div>
            </div>
          </div>
        </section>
        <section class="section-features">
          <div class="row">
            <div class="col-1-of-4">
              <div class="feature-box">
                <i class="feature-box__icon icon-basic-pin1"></i>
                <h3 class="heading-tertiary u-margin-bottom-small">
                  Explore the world
                </h3>
                <p class="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.
                </p>
              </div>
            </div>

            <div class="col-1-of-4">
              <div class="feature-box">
                <i class="feature-box__icon icon-basic-alarm"></i>
                <h3 class="heading-tertiary u-margin-bottom-small">
                  Meet nature
                </h3>
                <p class="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.
                </p>
              </div>
            </div>
            <div class="col-1-of-4">
              <div class="feature-box">
                <i class="feature-box__icon icon-basic-message-txt"></i>
                <h3 class="heading-tertiary u-margin-bottom-small">
                  Find your way
                </h3>
                <p class="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.
                </p>
              </div>
            </div>

            <div class="col-1-of-4">
              <div class="feature-box">
                <i class="feature-box__icon icon-basic-heart"></i>
                <h3 class="heading-tertiary u-margin-bottom-small">
                  Live a healthier life
                </h3>
                <p class="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="section-tours">
          <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary">Plans</h2>
          </div>
          <div class="row">
            <div class="col-1-of-3">col 1 </div>
            <div class="col-1-of-3">col 2 </div>
            <div class="col-1-of-3">col 3 </div>
          </div>
        </section>
      </main>
      {/* <section class="grid-test">
        <div class="row">
          <div class="col-1-of-2">Col 1 of 2</div>
          <div class="col-1-of-2">Col 2 of 2</div>
        </div>
        <div class="row">
          <div class="col-1-of-3">Col 1 of 3</div>
          <div class="col-2-of-3">Col 2 of 3</div>
          <div class="col-3-of-3">Col 3 of 3</div>
        </div>
      </section> */}
    </>
  );
};

export default Header;
