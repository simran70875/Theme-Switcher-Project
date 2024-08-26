import styled from "styled-components";

interface ColumnProps {
  width?: number;
  bg?: any;
}

export const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

export const Column = styled.div<ColumnProps>`
  float: left;
  width: 100%;
  background-color: ${(props) => props.bg};
  @media only screen and (min-width: 768px) {
    width: ${(props) =>
      props.width
        ? (props.width / 12) * 100
        : 8.33}%; // Default to 8.33% if width is not provided
  }
`;
