import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { Wrapper } from "../components/Wrapper";
import {
  useRegisterMutation,
  UsernamePasswordInput,
} from "../generated/graphql";

const register = () => {
  const [, register] = useRegisterMutation();
  const router = useRouter();

  return (
    <Wrapper>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await register({ options: values });

          if (response.error) {
            setErrors({
              password: "invalid username or password",
            });
            return;
          }

          router.push("/");
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

export default register;
