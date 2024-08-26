import styled from "styled-components";

interface CardProps {
  align?: any; // Define width prop for Column
}

export const CardsContainer = styled.section`
  margin: 50px;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.quoteBgc};
  border: 1px solid ${({ theme }) => theme.colors.quoteBorder};
  margin-left: auto;
  border-radius: 3px;
`;

export const CardTitle = styled.div<CardProps>`
  color: ${({ theme }) => theme.colors.quoteTitle};
  // border-bottom: 1px solid ${({ theme }) => theme.colors.quoteBorder};
  text-align: ${(props) => props.align};
  padding: 10px;
  font-weight: bold;
`;

export const CardBody = styled.div`
  color: ${({ theme }) => theme.colors.quoteBody};
  padding: 10px;
  font-family: monospace;
`;
