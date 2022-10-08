import { ReactNode } from "react";
import * as S from "./Grid.styles";
import { GridCol } from "./GridCol";

export interface GridProps {
  children: ReactNode;
  columns?: number;
  display?: "grid" | "flex";
}

export const Grid = ({
  children,
  display = "grid",
  columns,
  ...args
}: GridProps) => (
  <S.Grid columns={columns} display={display} {...args}>
    {children}
  </S.Grid>
);

Grid.Col = GridCol;
