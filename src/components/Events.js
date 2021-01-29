import React from "react";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";
import EventForm from "./EventForm";

function Events() {
  return (
    <div class="events__page">
      <div class="events__page__main">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
      <div class="events__page__create">
        <EventForm />
      </div>
    </div>
  );
}

export default Events;
