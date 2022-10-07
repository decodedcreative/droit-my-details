import { ReactNode } from "react";
import * as S from "./Box.styles";

export interface BoxProps {
  children: ReactNode;
  rounded?: boolean;
}

export const Box = ({ children, ...args }: BoxProps) => (
  <S.Box {...args}>{children}</S.Box>
);
