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
    <div class="home">
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
              <img src={me} class="user-nav__user-photo" alt="User Photo" />
              <span class="user-nav__user-name">Sean</span>
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
            <div class="detail">
              <div class="events">
                <div class="events__upcoming">
                  <div class="events__upcoming__info">
                    <h1 class="events__upcoming__title">Upcoming Events</h1>
                    <img
                      src={nat1}
                      class="events__upcoming__photo"
                      alt="Upcoming Event"
                    />
                    <span>Alaska Cruise</span>
                  </div>

                  <div class="events__upcoming__date">
                    <p>
                      <h4>25</h4> <span>May</span>
                    </p>
                  </div>
                </div>
                <a href="/#" class="btn btn--white">
                  Create New Event
                </a>
              </div>
              {/* <div class="events">
                <div class="events__upcoming">
                  <img
                    src={nat1}
                    class="events__upcoming__photo"
                    alt="Upcoming Event"
                  />
                  <span>Alaska Cruise</span>
                </div>
                <a href="/#" class="btn btn--white">
                  Create Event
                </a>
              </div> */}
            </div>
            <div class="footer">Footer</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
