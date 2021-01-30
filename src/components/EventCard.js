import React from "react";
import { Link } from "react-router-dom";

const MONTH = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

function EventCard({ event }) {
  const date = new Date(parseInt(event.startDate));

  const displayCalendar = () => {
    if (!event) {
      return;
    }
    const _date = new Date(parseInt(event.startDate));
    console.log({ _date });
    console.log({ month: _date.getMonth() });
    console.log({ Date: _date.getDate() });

    return (
      <div>
        <h4>{_date.getDate()}</h4> <span>{MONTH[_date.getMonth()]}</span>
      </div>
    );
  };
  return (
    <div class="event__card">
      <div class="detail">
        <div class="events">
          <div class="events__upcoming">
            <div class="events__upcoming__info">
              <h1>{event?.eventName}</h1>
              <p>
                {MONTH[date.getMonth()]} {date.getDate()} {date.getFullYear()}
              </p>
            </div>

            <div class="events__upcoming__date">
              <p>
                {displayCalendar()}
                {/* <h4>25</h4> <span>{() => formatMonth(event?.startDate)}</span> */}
              </p>
            </div>
          </div>
          <Link to="/home" class="btn btn--white events__upcoming__btn">
            View Event Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
