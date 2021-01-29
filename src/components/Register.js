import React, { useState } from "react";
import { Box, Input, Button, useToast } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";

import { REGISTER } from "../queries";
import { useHistory } from "react-router-dom";
import "../scss/main.scss";

const initState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  dateOfBirth: "",
  username: "",
};

const Register = () => {
  const toast = useToast();
  const [register] = useMutation(REGISTER);
  const history = useHistory();
  const [state, setState] = useState(initState);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await register({
        variables: {
          ...state,
        },
      });
      if (response.data.register.errors) {
        toast({
          title: "Failed to Create Account.",
          description: "Please validate your information.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Successfully Created Account.",
          description: "Please Login. Redirecting to login page...",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setTimeout(history.push("/login"), 2000);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div class="register">
        <div class="register__form">
          <form onSubmit={handleSubmit} class="form">
            <div class=" u-margin-bottom-big">
              <h2 class="heading-secondary">Register Now</h2>
            </div>
            <div class="form__group">
              <input
                type="text"
                id="firstName"
                class="form__input"
                placeholder="First Name"
                onChange={(e) =>
                  setState({ ...state, firstName: e.target.value })
                }
                required
              />
              <label for="firstName" class="form__label">
                First Name
              </label>
            </div>
            <div class="form__group">
              <input
                type="text"
                id="lastName"
                class="form__input"
                placeholder="Last Name"
                onChange={(e) =>
                  setState({ ...state, lastName: e.target.value })
                }
                required
              />
              <label for="lastName" class="form__label">
                Last Name
              </label>
            </div>
            <div class="form_group">
              <input
                type="text"
                id="username"
                class="form__input"
                placeholder="Username"
                onChange={(e) =>
                  setState({ ...state, username: e.target.value })
                }
                required
              />
              <label for="username" class="form__label">
                Username
              </label>
            </div>
            <div class="form_group">
              <input
                type="email"
                id="email"
                class="form__input"
                placeholder="Email address"
                onChange={(e) => setState({ ...state, email: e.target.value })}
                required
              />
              <label for="email" class="form__label">
                Email
              </label>
            </div>
            <div class="form__group">
              <input
                type="password"
                id="password"
                class="form__input"
                onChange={(e) =>
                  setState({ ...state, password: e.target.value })
                }
                required
              />
              <label for="password" class="form__label">
                Password
              </label>
            </div>
            <div class="form__group">
              <input
                type="date"
                id="dateOfBirth"
                class="form__input"
                onChange={(e) =>
                  setState({ ...state, dateOfBirth: e.target.value })
                }
                required
              />
              <label for="dateOfBirth" class="form__label">
                Date of Birth
              </label>
            </div>
            <div class="form__group">
              <button type="submit" class="btn btn--green">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
