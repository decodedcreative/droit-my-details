import { ReactNode } from "react";
import * as S from "./Nav.styles";
import { NavItem } from "./Nav-Item";

export interface NavProps {
  children: ReactNode;
}

export const Nav = ({ children }: NavProps) => (
  <S.Nav>
    <S.NavList>{children}</S.NavList>
  </S.Nav>
);

Nav.Item = NavItem;
