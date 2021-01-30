import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { UPCOMING_EVENTS } from "../queries";
import EventCard from "./EventCard";
import EventForm from "./EventForm";

function Events() {
  const { loading, error, data } = useQuery(UPCOMING_EVENTS);
  console.log({ data });
  return (
    <div class="events__page">
      <div class="events__page__main">
        {data?.getUpcomingEvents.map((event) => (
          <EventCard event={event} />
        ))}
      </div>
      <div class="events__page__create">
        <EventForm />
      </div>
    </div>
  );
}

export default Events;
