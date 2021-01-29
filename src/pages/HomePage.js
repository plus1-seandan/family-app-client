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
const HomePage = () => {
  return (
    <div class="general-layout">
      <div class="container">
        <header class="home-header">
          <img src={logo} alt="logo" class="home-logo" />
          <form action="#" class="search">
            <input type="text" class="search__input" placeholder="Search..." />
            <button class="search__button">
              <SearchIcon class="search__icon" />
            </button>
          </form>
          <nav class="user-nav">
            <div class="user-nav__icon-box">
              <ChatBubbleIcon class="user-nav__icon" />
              <span class="user-nav__notification">13</span>
            </div>
            <div class="user-nav__user">
              <a href="/profile">
                <img src={me} class="user-nav__user-photo" alt="User Photo" />
                <span class="user-nav__user-name">Sean</span>
              </a>
            </div>
          </nav>
        </header>
        <div class="home-content">
          <nav class="sidebar">
            <ul class="sidebar-nav">
              <li class="sidebar-nav__item sidebar-nav__item--active">
                <a class="sidebar-nav__link">
                  <HomeIcon class="sidebar-nav__icon" />
                  <span>My Family</span>
                </a>
              </li>
              <li class="sidebar-nav__item">
                <a class="sidebar-nav__link">
                  <EventIcon class="sidebar-nav__icon" />
                  <span>Upcoming Events</span>
                </a>
              </li>
              <li class="sidebar-nav__item">
                <a class="sidebar-nav__link">
                  <PhotoAlbumIcon class="sidebar-nav__icon" />
                  <span>Photo Albums</span>
                </a>
              </li>
            </ul>
            <div class="legal">
              &copy; 2021 by Sean Dan. All rights reserved.
            </div>
          </nav>
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
            <div class="footer">Footer</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
