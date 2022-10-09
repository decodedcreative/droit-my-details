import { ReactNode } from "react";
import * as S from "./Box.styles";

export interface BoxProps {
  children: ReactNode;
  rounded?: boolean;
  verticalSpacing?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
}

export const Box = ({ children, verticalSpacing, ...args }: BoxProps) => (
  <S.Box verticalSpacing={verticalSpacing} {...args}>
    {children}
  </S.Box>
);
