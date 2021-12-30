import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import { Wrapper } from "../components/Wrapper";
import { useLoginMutation } from "../generated/graphql";

const login = () => {
  const [, login] = useLoginMutation();

  return (
    <Wrapper>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await login(values);

          if (response.error) {
            setErrors({
              password: "invalid username or password",
            });
          }
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <FormControl>
              <Box mb={4}>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input
                  value={values.username}
                  onChange={handleChange}
                  id="username"
                  placeholder="username"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  value={values.password}
                  onChange={handleChange}
                  id="password"
                  placeholder="password"
                  type="password"
                />
              </Box>

              <Button type="submit" mt={4}>
                Submit
              </Button>
            </FormControl>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default login;
