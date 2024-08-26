import styled from "styled-components";

export const ThemeContainer = styled.div`
  // background-color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 7px 5px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ThemeButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
  margin: 0 5px;
  padding: 10px;
  font-size: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.border};
`;

export const ThemeText = styled.p`
  color: ${({ theme }) => theme.colors.quoteTitle};
  font-weight: bold;
  font-family: monospace;
  font-size: 17px;
`;
