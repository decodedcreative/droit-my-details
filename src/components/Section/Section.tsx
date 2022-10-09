import { ReactNode } from "react";
import * as S from "./Section.styles";

export interface SectionProps {
  children: ReactNode;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  border?: "top" | "bottom" | "vertical" | "horizontal" | boolean;
}

export interface SectionItemProps {
  children: ReactNode;
  bottomSpacing?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  topSpacing?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  columns?: number;
  verticalSpacing?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
}

export interface SectionItemContentProps {
  columns?: number;
}

export const Section = ({ children, border, ...args }: SectionProps) => (
  <S.Section {...args}>
    <S.SectionContent border={border}>{children}</S.SectionContent>
  </S.Section>
);

const SectionItem = ({
  children,
  bottomSpacing,
  topSpacing,
  columns,
  verticalSpacing,
  ...args
}: SectionItemProps) => (
  <S.SectionItem
    bottomSpacing={bottomSpacing}
    topSpacing={topSpacing}
    verticalSpacing={verticalSpacing}
    {...args}
  >
    <S.SectionItemContent columns={columns}>{children}</S.SectionItemContent>
  </S.SectionItem>
);

Section.Item = SectionItem;
