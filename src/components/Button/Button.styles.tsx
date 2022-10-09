import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

export const Button = styled("button")<ButtonProps>`
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.interactive};
  color: ${(props) => props.theme.colors.interactive};
  cursor: pointer;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.fontSize};
  font-weight: ${(props) => props.theme.typography.weights.bold};
  word-break: break-word;
  user-select: none;
  border-radius: 4px;
  padding: 10px 16px;
  display: inline-flex;
  align-items: center;

  ${(props) => css`
    &:focus-visible {
      outline: 2px solid transparent;
      outline-offset: 2px;
      box-shadow: 0 0 0 2px ${props.theme.colors.background},
        0 0 0 4px ${props.theme.colors.interactive};
    }
  `};

  ${(props) =>
    props.size === "small" &&
    css`
      padding: 4px 6px;
      font-size: ${(props) => props.theme.typography.sizes.xs};

      ${ButtonMedia} {
        width: 14px;
        height: 14px;
      }
    `};

  ${(props) =>
    props.variant === "primary" &&
    css`
      background-color: ${props.theme.colors.interactive};
      color: ${props.theme.colors.background};
    `};

  ${(props) =>
    props.variant === "link" &&
    css`
      background-color: transparent;
      color: ${props.theme.colors.text};
      border-color: transparent;
    `};
`;

export const ButtonMedia = styled("span")`
  width: 24px;
  height: 24px;
  display: inline-block;
  margin-right: 5px;
`;
