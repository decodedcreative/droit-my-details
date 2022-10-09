import styled from "styled-components";

export const Textfield = styled("input")`
  appearance: none;
  background-color: ${(props) => props.theme.colors.textfields};
  width: 100%;
  box-sizing: border-box;
  padding: 8px 12px;
  color: ${(props) => props.theme.colors.headings};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.sizes.default};
  line-height: ${(props) => props.theme.typography.lineHeight};
  border: ${(props) => props.theme.general.borderWidth} solid transparent;

  &:focus::not(&:focus-visible) {
    outline: 0;
    border-color: unset;
  }

  &:focus-visible {
    border-color: ${(props) => props.theme.colors.interactive};
    outline: ${(props) => props.theme.general.focusWidth} solid transparent;
    outline-offset: ${(props) => props.theme.general.focusWidth};
    box-shadow: ${(props) => props.theme.general.focusBoxShadow};
  }
`;
