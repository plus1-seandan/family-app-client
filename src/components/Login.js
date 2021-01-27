import React from "react";
import { Box, Input, Button, useToast } from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { useMutation } from "@apollo/client";

import { LOGIN } from "../queries";
import { useHistory } from "react-router-dom";

const Login = () => {
  const toast = useToast();
  const [login] = useMutation(LOGIN);
  const history = useHistory();

  const handleSubmit = async (data) => {
    try {
      const response = await login({
        variables: {
          ...data,
        },
      });
      console.log({ data: response.data });
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
    <Box>
      <Box>Login</Box>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (data, { setSubmitting }) => {
          setSubmitting(true);
          await handleSubmit(data);
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <Form>
            <Field placeholder="email" name="email" type="input" as={Input} />
            <Field
              placeholder="password"
              name="password"
              type="password"
              as={Input}
            />
            <Button disabled={isSubmitting} type="submit">
              Login
            </Button>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Login;
