import styled, { css } from "styled-components";
import { BoxProps } from "../Box";

export const Box = styled("div")<BoxProps>`
  background-color: ${(props) => props.theme.colors.background};
  border: ${(props) => props.theme.general.borderWidth} solid
    ${(props) => props.theme.colors.borders};

  ${(props) =>
    props.rounded &&
    css`
      border-radius: ${(props) => props.theme.general.borderRadius};
    `}
  ${(props) =>
    props.verticalSpacing === "xxl" &&
    css`
      padding-top: ${(props) => props.theme.spacing.xxl};
      padding-bottom: ${(props) => props.theme.spacing.xxl};
    `}
`;
