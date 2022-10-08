import styled, { css } from "styled-components";
import { NavItemProps } from "./Nav-Item";

export const Nav = styled("nav")``;

export const NavList = styled("ul")`
  margin: 0;
  padding: 0;

  @media screen and (min-width: 640px) and (max-width: 960px) {
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
        border-left: 2px solid ${(props) => props.theme.colors.active};
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
  padding: ${(props) => props.theme.spacing.sm} 2px;
  margin: 0;
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;

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
`;

export const NavItemText = styled("span")``;
