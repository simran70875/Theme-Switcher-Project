import { Box } from "@chakra-ui/react";
import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.quoteTitle};
  font-family: monospace;
  font-size: 30px;
  text-align: center;
  font-weight: 900;
`;

// Styled component for the login container with background image and overlay
export const LoginContainer = styled(Box)`
  height: 100vh;
  background-image: url("https://media.istockphoto.com/id/594484448/vector/books-sketch-seamless.jpg?s=612x612&w=0&k=20&c=DACpDBVkXYVwafxvixLdFERAbVJMF94SyZO9gJ0FcU4="); /* Replace 'path_to_your_image.jpg' with your image path */
  background-size: auto;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(
      0,
      0,
      0,
      0.2
    ); /* Adjust the overlay color and opacity as needed */
  }
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.quoteBgc};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.quoteTitle};
  border-radius: 20px;
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const InputField = styled.input`
  color: #000;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;
