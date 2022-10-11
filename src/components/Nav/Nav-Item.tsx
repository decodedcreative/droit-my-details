import { ReactNode } from "react";
import * as S from "./Nav.styles";

export interface NavItemProps {
  children: ReactNode;
  active?: boolean;
  icon: any;
  onClick?: (event: any) => void;
}

export const NavItem = ({ children, active, icon, onClick }: NavItemProps) => (
  <S.NavItem active={active} icon={icon}>
    <S.NavItemButton onClick={onClick}>
      <S.NavItemMedia>{icon}</S.NavItemMedia>
      <S.NavItemText>{children}</S.NavItemText>
    </S.NavItemButton>
  </S.NavItem>
);
