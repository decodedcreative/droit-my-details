import styled, { css } from "styled-components";
import { GridProps } from "./Grid";
import { GridColProps } from "./GridCol";

export const Grid = styled("div")<GridProps>`
  display: grid;
  grid-column-gap: ${(props) => props.theme.general.gridGutter};

  ${(props) =>
    props.display === "flex" &&
    css`
      display: flex;
    `}

  @media screen and (max-width: 960px) {
    row-gap: ${(props) => props.theme.general.gridGutter};
  }

  @media screen and (min-width: 961px) {
    grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  }
`;

export const GridCol = styled("div")<GridColProps>`
  @media screen and (min-width: 961px) {
    grid-column: span ${(props) => props.span};
    grid-column-start: ${(props) => props.offset && props.offset + 1};
    grid-column-end: ${(props) =>
      props.offset && props.span && props.offset + 1 + props.span};
  }
`;
