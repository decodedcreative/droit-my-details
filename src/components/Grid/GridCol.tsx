import { ReactNode } from "react";
import * as S from "./Grid.styles";

export interface GridColProps {
  children: ReactNode;
  span?: number;
  offset?: number;
}

export const GridCol = ({ children, offset, span, ...args }: GridColProps) => (
  <S.GridCol span={span} offset={offset} {...args}>
    {children}
  </S.GridCol>
);
