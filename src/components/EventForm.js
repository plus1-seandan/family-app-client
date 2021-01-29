import React, { useState } from "react";

const initState = {
  name: "",
  startDate: "",
};

function EventForm() {
  const [state, setState] = useState(initState);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div class="events__page__create__form">
      <form class="form" onSubmit={handleSubmit}>
        <div class=" u-margin-bottom-big">
          <h2 class="heading-secondary">Create New Event</h2>
        </div>
        <div class="form__group">
          <input
            type="text"
            id="name"
            class="form__input"
            placeholder="Event Name"
            onChange={(e) => setState({ ...state, name: e.target.value })}
            required
          />
          <label for="name" class="form__label">
            Event Name
          </label>
        </div>
        <div class="form__group">
          <input
            type="date"
            id="startDate"
            class="form__input"
            onChange={(e) => setState({ ...state, date: e.target.value })}
            required
          />
          <label for="startDate" class="form__label">
            Start Date
          </label>
        </div>
        <div class="form__group">
          <button type="submit" class="btn btn--green">
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
}

export default EventForm;
