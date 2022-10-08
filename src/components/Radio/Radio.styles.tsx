import styled from "styled-components";
import { RadioInputProps, RadioProps } from "./Radio";

export const Radio = styled("div")<RadioProps>`
  position: relative;
  display: flex;
`;

export const RadioLabel = styled("label")`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.typography.sizes.default};
  font-family: ${(props) => props.theme.typography.fontFamily};
  line-height: ${(props) => props.theme.typography.lineHeight};
  display: inline-flex;
  align-items: center;
  position: relative;
  z-index: 0;
`;

export const RadioBackground = styled("div")`
  background-color: ${(props) => props.theme.colors.page};
  border: ${(props) => props.theme.general.borderWidth} solid
    ${(props) => props.theme.colors.borders};
  border-radius: 50%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
`;

export const RadioText = styled("span")`
  margin-left: ${(props) => props.theme.spacing.sm};
`;

export const RadioInput = styled("input").attrs<RadioInputProps>({
  type: "Radio",
})<RadioInputProps>`
  position: absolute;
  opacity: 0;
  width: 14px;
  height: 14px;
  border-radius: ${(props) => props.theme.general.borderRadius};
  z-index: 1;

  &:focus-visible ~ ${RadioLabel} ${RadioBackground} {
    box-shadow: ${(props) => props.theme.general.focusBoxShadow};
    border-color: ${(props) => props.theme.colors.interactive};
    outline-width: ${(props) => props.theme.general.focusWidth};
  }

  &:checked ~ ${RadioLabel} ${RadioBackground} {
    border-color: ${(props) => props.theme.colors.interactive};
  }
`;

export const RadioIndicator = styled("div")`
  color: ${(props) => props.theme.colors.color10};
  transform: scale(0);
  transition: transform 0.05s ease-in;
  border-width: 5px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.interactive};
  border-radius: 50%;

  ${RadioInput}:checked ~ ${RadioLabel} & {
    transform: scale(1);
  }
`;
