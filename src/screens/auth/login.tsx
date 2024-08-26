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
import { Link, useNavigate } from "react-router-dom";

export interface LoginProps {}

export function Login(props: LoginProps) {
  const navigate = useNavigate();
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
            <Title  style={{ marginBottom: 5 }}>Login</Title>
            <p style={{ marginBottom: 20, textAlign: "center" }}>
              Login With User-Id/Email and Password
            </p>

            <InputContainer style={{ marginBottom: 2 }}>
              <InputLabel htmlFor="loginId">Login ID/Email:</InputLabel>
              <InputField type="text" id="loginId" name="loginId" />
            </InputContainer>

            <Box textAlign={"end"}>
              <Link to="/forgotPassword">Forgot Password?</Link>
            </Box>

            <InputContainer>
              <InputLabel htmlFor="password">Password:</InputLabel>
              <InputField type="password" id="password" name="password" />
            </InputContainer>
            <Button
              onClick={() => navigate("/layout")}
              style={{ marginBottom: 20, marginTop: 10 }}
            >
              <ButtonText>Login</ButtonText>
            </Button>

            <Flex mt={1}>
              <p>Don't Have An Account?</p>
              <Link style={{ paddingLeft: 2 }} to="/signup">
                Sign-Up
              </Link>
            </Flex>
          </Container>
        </Column>
      </Flex>
    </LoginContainer>
  );
}
