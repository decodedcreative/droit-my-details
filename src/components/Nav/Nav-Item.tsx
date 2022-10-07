import { ReactNode } from "react";
import * as S from "./Nav.styles";

export interface NavItemProps {
  children: ReactNode;
  active?: boolean;
  icon: any;
}

export const NavItem = ({ children, active, icon }: NavItemProps) => (
  <S.NavItem active={active} icon={icon}>
    <S.NavItemButton>
      <S.NavItemMedia>{icon}</S.NavItemMedia>
      <span>{children}</span>
    </S.NavItemButton>
  </S.NavItem>
);
