import styled, { css } from "styled-components";
import { NavItemProps } from "./Nav-Item";

export const Nav = styled("nav")``;

export const NavList = styled("ul")`
  margin: 0;
  padding: 0;
`;

export const NavItem = styled("li")<NavItemProps>`
  list-style: none;
  color: ${(props) => props.theme.colors.text};

  ${(props) =>
    props.active &&
    css`
      border-left: 2px solid ${(props) => props.theme.colors.active};

      ${NavItemButton} {
        color: ${(props) => props.theme.colors.active};
      }
    `}
`;

export const NavItemButton = styled("button")`
  background-color: transparent;
  appearance: none;
  border: 0;
  color: inherit;
  font-size: inherit;
  padding: ${(props) => props.theme.spacing.sm} 0;
  margin: 0;
  width: 100%;
  text-align: left;
`;

export const NavItemMedia = styled("span")`
  display: inline-block;
  fill: currentColor;
  width: 14px;
  height: 14px;
  margin-left: 18px;
  margin-right: 18px;
`;
