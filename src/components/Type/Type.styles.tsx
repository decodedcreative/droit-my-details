import styled from "styled-components";

import { TypeProps } from "./Type";

export const Type = styled("p")<TypeProps>`
  font-family: ${(props) => props.theme.typography.fontFamily};
  margin: 0;
  padding: 0;
  font-size: ${(props) =>
    props.size
      ? props.theme.typography.sizes[props.size]
      : props.theme.typography.sizes["default"]};

  font-weight: ${(props) =>
    props.weight
      ? props.theme.typography.weights[props.weight]
      : props.theme.typography.weights["default"]};
  line-height: ${(props) =>
    props.lineHeight
      ? props.theme.typography.lineHeights[props.lineHeight]
      : props.theme.typography.lineHeights["default"]};
`;
