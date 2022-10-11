import { HTMLAttributes, ReactNode } from "react";
import * as S from "./Type.styles";

export interface TypeProps extends HTMLAttributes<HTMLUnknownElement> {
  children: ReactNode;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  lineHeight?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  weight?: "light" | "medium" | "bold";
}

export const Type = ({ children, ...args }: TypeProps) => (
  <S.Type {...args}>{children}</S.Type>
);
