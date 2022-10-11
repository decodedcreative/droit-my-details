import styled, { css } from "styled-components";
import { NavItemProps } from "./Nav-Item";

export const Nav = styled("nav")``;

export const NavList = styled("ul")`
  margin: 0;
  padding: 0;

  @media screen and (min-width: 641px) and (max-width: 960px) {
    display: flex;
  }
`;

export const NavItem = styled("li")<NavItemProps>`
  list-style: none;
  color: ${(props) => props.theme.colors.text};

  ${(props) =>
    props.active &&
    css`
      ${NavItemMedia} {
        position: relative;

        &:before {
          content: "";
          width: 2px;
          height: 100%;
          background-color: ${(props) => props.theme.colors.active};
          position: absolute;
          left: 0;
        }

        @media screen and (min-width: 641px) and (max-width: 960px) {
          &:before {
            content: none;
          }
        }
      }

      ${NavItemButton} {
        color: ${(props) => props.theme.colors.active};
      }
    `}
`;

export const NavItemButton = styled("button")`
  background-color: transparent;
  appearance: none;
  border: 1px solid transparent;
  color: inherit;
  font-size: inherit;
  line-height: inherit;
  padding: ${(props) => props.theme.spacing.sm} 2px;
  margin: 0;
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  cursor: pointer;

  ${(props) => css`
    &:focus-visible {
      outline: 2px solid transparent;
      outline-offset: 2px;
      box-shadow: 0 0 0 2px ${props.theme.colors.background},
        0 0 0 4px ${props.theme.colors.interactive};
      border-color: ${props.theme.colors.interactive};
    }
  `};
`;

export const NavItemMedia = styled("span")`
  display: inline-block;
  fill: currentColor;
  width: 14px;
  height: 14px;
  padding-left: 18px;
  padding-right: 18px;
  line-height: normal;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const NavItemText = styled("span")``;
