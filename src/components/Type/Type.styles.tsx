import styled from "styled-components";

import { TypeProps } from "./Type";

export const Type = styled("p")<TypeProps>`
  font-family: ${(props) => props.theme.typography.fontFamily};
  line-height: ${(props) => props.theme.typography.lineHeight};
  margin: 0;
  font-size: ${(props) =>
    props.size
      ? props.theme.typography.sizes[props.size]
      : props.theme.typography.sizes["default"]};

  font-weight: ${(props) =>
    props.weight
      ? props.theme.typography.weights[props.weight]
      : props.theme.typography.weights["default"]};
`;
