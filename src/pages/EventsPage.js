import React from "react";
import Events from "../components/Events";
import HomeHeader from "../components/HomeHeader";
import Sidebar from "../components/Sidebar";

function EventsPage() {
  return (
    <div class="general-layout">
      <div class="container">
        <HomeHeader />
        <div class="general-content">
          <Sidebar />
          <Events />
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
