import { Box, Flex } from "@chakra-ui/react";
import { Column } from "../../components/style/grid.styled";
import {
  Container,
  InputContainer,
  InputField,
  InputLabel,
  LoginContainer,
  Title,
} from "../../components/style/Auth.styled";
import { Button, ButtonText } from "../../components/style/Button.styled";
import { Link } from "react-router-dom";

export interface LoginProps {}

export function Signup(props: LoginProps) {
  return (
    <LoginContainer>
      <Flex
        zIndex={1}
        position={"relative"}
        height={"100vh"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Column width={4} style={{ margin: 10 }}>
          <Container style={{ padding: 20 }}>
            <Title style={{ marginBottom: 5 }}>Sign-Up</Title>
            <p style={{ marginBottom: 20, textTransform: "capitalize" }}>
              Fill Following details to Register
            </p>

            <InputContainer>
              <InputLabel htmlFor="username">Username:</InputLabel>
              <InputField type="text" id="username" name="username" />
            </InputContainer>
            <InputContainer>
              <InputLabel htmlFor="email">Email:</InputLabel>
              <InputField type="email" id="email" name="email" />
            </InputContainer>
            <InputContainer>
              <InputLabel htmlFor="phone">Phone Number:</InputLabel>
              <InputField type="number" id="phone" name="phone" />
            </InputContainer>
            <InputContainer>
              <InputLabel htmlFor="password">Password:</InputLabel>
              <InputField type="password" id="password" name="password" />
            </InputContainer>
            <InputContainer>
              <InputLabel htmlFor="confirmpassword">
                Confirm Password:
              </InputLabel>
              <InputField
                type="password"
                id="confirmpassword"
                name="confirmpassword"
              />
            </InputContainer>
            <Button style={{ marginBottom: 20, marginTop: 10 }}>
              <ButtonText>Register</ButtonText>
            </Button>

            <Flex mt={1}>
              <p>Have An Account?</p>
              <Link style={{ paddingLeft: 2 }} to="/">
                Login
              </Link>
            </Flex>
          </Container>
        </Column>
      </Flex>
    </LoginContainer>
  );
}
