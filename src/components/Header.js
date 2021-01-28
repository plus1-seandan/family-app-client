import "../scss/main.scss";
import logo from "../img/logo2-white.png";
import nat1 from "../img/nat-1-large.jpg";
import nat2 from "../img/nat-2-large.jpg";
import nat3 from "../img/nat-3-large.jpg";

const Header = () => {
  return (
    <>
      <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
        <label for="navi-toggle" class="navigation__button">
          <span class="navigation__icon"></span>
        </label>
        <div class="navigation__background"></div>
        <nav class="navigation__nav">
          <ul class="navigation__list">
            <li class="navigation__item">
              <a href="#" class="navigation__link">
                some nav 1
              </a>
            </li>
            <li class="navigation__item">
              <a href="#" class="navigation__link">
                some nav 2
              </a>
            </li>
            <li class="navigation__item">
              <a href="#" class="navigation__link">
                some nav 3
              </a>
            </li>
            <li class="navigation__item">
              <a href="#" class="navigation__link">
                some nav 4
              </a>
            </li>
          </ul>
        </nav>
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
            <div class="col-1-of-3">
              <div class="card">
                <div class="card__side card__side--front">
                  <div class="card__picture card__picture--1">&nbsb;</div>
                  <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--1">
                      see explore
                    </span>
                  </h4>
                  <div class="card__details">
                    <ul>
                      <li>3 day tours</li>
                      <li>up to 30 people</li>
                      <li>2 tour guides</li>
                      <li>sleep in cozy hotels</li>
                      <li>difficulty: easy</li>
                    </ul>
                  </div>
                </div>
                <div class="card__side card__side--back card__side--back-1">
                  <div class="card__cta">
                    <div class="card__price-box">
                      <p class="card__price-only">Test</p>
                      <p class="card__price-value">$300</p>
                    </div>
                    <a href="/#" class="btn btn--white">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-1-of-3">
              <div class="card">
                <div class="card__side card__side--front">
                  <div class="card__picture card__picture--2">&nbsb;</div>
                  <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--2">
                      see explore
                    </span>
                  </h4>
                  <div class="card__details">
                    <ul>
                      <li>3 day tours</li>
                      <li>up to 30 people</li>
                      <li>2 tour guides</li>
                      <li>sleep in cozy hotels</li>
                      <li>difficulty: easy</li>
                    </ul>
                  </div>
                </div>
                <div class="card__side card__side--back card__side--back-2">
                  <div class="card__cta">
                    <div class="card__price-box">
                      <p class="card__price-only">Test</p>
                      <p class="card__price-value">$300</p>
                    </div>
                    <a href="/#" class="btn btn--white">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-1-of-3">
              <div class="card">
                <div class="card__side card__side--front">
                  <div class="card__picture card__picture--3">&nbsb;</div>
                  <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--3">
                      see explore
                    </span>
                  </h4>
                  <div class="card__details">
                    <ul>
                      <li>3 day tours</li>
                      <li>up to 30 people</li>
                      <li>2 tour guides</li>
                      <li>sleep in cozy hotels</li>
                      <li>difficulty: easy</li>
                    </ul>
                  </div>
                </div>{" "}
                <div class="card__side card__side--back card__side--back-3">
                  <div class="card__cta">
                    <div class="card__price-box">
                      <p class="card__price-only">Test</p>
                      <p class="card__price-value">$300</p>
                    </div>
                    <a href="/#" class="btn btn--white">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section-book">
          <div class="book">
            <div class="book__form">
              <form action="#" class="form">
                <div class=" u-margin-bottom-big">
                  <h2 class="heading-secondary">Register Now</h2>
                </div>
                <div class="form__group">
                  <input
                    type="text"
                    id="name"
                    class="form__input"
                    placeholder="Full Name"
                    required
                  />
                  <label for="name" class="form__label">
                    Full Name
                  </label>
                </div>
                <div class="form_group">
                  <input
                    type="email"
                    id="email"
                    class="form__input"
                    placeholder="Email address"
                    required
                  />
                  <label for="email" class="form__label">
                    Email
                  </label>
                </div>
                <div class="form__group">
                  <button class="btn btn--green">Register</button>
                </div>
              </form>
            </div>
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
