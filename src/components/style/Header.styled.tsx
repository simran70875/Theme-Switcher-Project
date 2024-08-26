import styled from "styled-components";
import { Box, Text } from "@chakra-ui/react";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.header};
  padding: 10px;
  text-align: center;
  font-weight: bold;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderBottom};
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 8px;
    font-size: 14px;
  }
`;

export const HeaderText = styled(Box)`
  color: ${({ theme }) => theme.colors.quoteTitle};
  font-weight: bold;
  font-family: monospace;
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export const HeaderLogo = styled(Text)`
  color: ${({ theme }) => theme.colors.quoteTitle};
  font-family: monospace;
  font-size: 1.25rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 16px;
  }
`;

export const HeaderIcon = styled(Box)`
  color: ${({ theme }) => theme.colors.quoteTitle};
`;

export const HeaderInput = styled(Box)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: 50%;
  border-radius: 20px;
  font-family: monospace;
  color: ${({ theme }) => theme.colors.quoteTitle};
  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.85rem;
    margin-bottom: 16px;
  }
`;
