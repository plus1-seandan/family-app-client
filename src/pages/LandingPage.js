import "../scss/main.scss";
import logo from "../img/logo2-white.png";
import nat1 from "../img/family2.jpg";
import nat2 from "../img/family4.jpg";
import nat3 from "../img/family5.jpg";
import Header from "../components/Header";

const LandingPage = () => {
  return (
    <>
      <>
        <Header />
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
                  Set reminders on upcoming events, chat with family in
                  realtime, share photos, etc...
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
                    Keep Connected
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
                    Set Reminders
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
                    Message
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
                    Share the love
                  </h3>
                  <p class="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, ipsum sapiente aspernatur.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    </>
  );
};

export default LandingPage;
