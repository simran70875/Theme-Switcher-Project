import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.5rem;
  background-color: ${({ theme }) => theme.colors.sidebar};
  border-radius: 5px;

  padding: 5px 15px;
  cursor: pointer;
`;

export const ButtonText = styled.p`
  color: ${({ theme }) => theme.colors.quoteTitle};
  font-weight: bold;
  font-family: monospace;
  font-size: 17px;
`;
