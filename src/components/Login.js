import React, { useState } from "react";
import { Box, Input, Button, useToast } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";

import { LOGIN } from "../queries";
import { useHistory } from "react-router-dom";

import "../scss/main.scss";

const initState = {
  email: "",
  password: "",
};

const Login = () => {
  const toast = useToast();
  const [login] = useMutation(LOGIN);
  const history = useHistory();
  const [state, setState] = useState(initState);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await login({
        variables: {
          ...state,
        },
      });
      if (!response.data.login.ok) {
        toast({
          title: "Failed to Login.",
          description: "Please validate your information.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else {
        localStorage.setItem("token", response.data.login.token);
        toast({
          title: "Successfully Logged In.",
          description: "Redirecting to home page...",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setTimeout(history.push("/home"), 2000);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div class="login">
        <div class="login__form">
          <form onSubmit={handleSubmit} class="form">
            <div class=" u-margin-bottom-big">
              <h2 class="heading-secondary">Login</h2>
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
              <button type="submit" class="btn btn--green">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
