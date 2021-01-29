import { gql, graphql, useQuery } from "@apollo/client";
import React from "react";
import Header from "../components/Header";
import { ME } from "../queries";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import EventIcon from "@material-ui/icons/Event";
import HomeIcon from "@material-ui/icons/Home";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";

import nat1 from "../img/nat-1-large.jpg";
import nat2 from "../img/nat-2-large.jpg";
import nat3 from "../img/nat-3-large.jpg";
import logo from "../img/logo2-white.png";
import me from "../img/seandan.jpg";
import HomeHeader from "../components/HomeHeader";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <main class="home-view">
      <div class="gallery">
        <figure class="gallery__item">
          <img src={nat1} alt="Family Photo 1" class="gallery__photo" />
        </figure>
        <figure class="gallery__item">
          <img src={nat2} alt="Family Photo 2" class="gallery__photo" />
        </figure>
        <figure class="gallery__item">
          <img src={nat3} alt="Family Photo 2" class="gallery__photo" />
        </figure>
      </div>
      <div class="overview">
        <h1 class="overview__heading">My Family</h1>
      </div>
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
      <div class="detail">
        <div class="events">
          <div class="events__upcoming">
            <div class="events__upcoming__info">
              <h1>Upcoming Events</h1>
              <p>Alaska Cruise</p>
            </div>
            <div class="events__upcoming__date">
              <p>
                <h4>25</h4> <span>May</span>
              </p>
            </div>
          </div>
          <a href="/#" class="btn btn--white events__upcoming__btn">
            View Event Details
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
