import { ReactNode } from "react";
import * as S from "./Section.styles";

export interface SectionProps {
  children: ReactNode;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
}

export interface SectionItemProps {
  children: ReactNode;
  bottomSpacing?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  verticalSpacing?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
}

export const Section = ({ children, ...args }: SectionProps) => (
  <S.Section {...args}>
    <S.SectionContent>{children}</S.SectionContent>
  </S.Section>
);

const SectionItem = ({
  children,
  bottomSpacing,
  verticalSpacing,
  ...args
}: SectionItemProps) => (
  <S.SectionItem
    bottomSpacing={bottomSpacing}
    verticalSpacing={verticalSpacing}
    {...args}
  >
    <S.SectionItemContent>{children}</S.SectionItemContent>
  </S.SectionItem>
);

Section.Item = SectionItem;
