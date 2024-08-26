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

export function ForgotPassword(props: LoginProps) {
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
            <Title style={{ marginBottom: 5 }}>Forgot Password</Title>
            <p
              style={{
                marginBottom: 20,
                textAlign: "center",
                textTransform: "capitalize",
              }}
            >
              Enter Email to set new password
            </p>
           
              <InputContainer>
                <InputLabel htmlFor="loginId">Email:</InputLabel>
                <InputField type="text" id="loginId" name="loginId" />
              </InputContainer>


              <InputContainer>
                <InputLabel htmlFor="password">Enter New Password:</InputLabel>
                <InputField type="password" id="password" name="password" />
              </InputContainer>
              <InputContainer>
                <InputLabel htmlFor="password">Confirm Password:</InputLabel>
                <InputField type="password" id="password" name="password" />
              </InputContainer>
              <Button style={{ marginBottom: 20, marginTop: 10 }}>
                <ButtonText>Set Password</ButtonText>
              </Button>
            
         
          </Container>
        </Column>
      </Flex>
    </LoginContainer>
  );
}
