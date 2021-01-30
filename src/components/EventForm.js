import { useMutation } from "@apollo/client";
import { Box, Input, Button, useToast } from "@chakra-ui/react";

import React, { useState } from "react";
import { CREATE_EVENT, UPCOMING_EVENTS } from "../queries";

const initState = {
  eventName: "",
  startDate: "",
};

function EventForm() {
  const [state, setState] = useState(initState);
  const [createEvent] = useMutation(CREATE_EVENT);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ state });
    const response = await createEvent({
      variables: {
        ...state,
      },
      refetchQueries: [{ query: UPCOMING_EVENTS }],
    });
    if (response.data.createEvent.errors) {
      toast({
        title: "Failed to Create Event.",
        description: "Please validate your information.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Successfully Created Event.",
        description: "",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }
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
            onChange={(e) => setState({ ...state, eventName: e.target.value })}
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
            onChange={(e) => setState({ ...state, startDate: e.target.value })}
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
