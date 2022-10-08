import styled, { css } from "styled-components";
import { SectionProps, SectionItemProps } from "./Section";

export const Section = styled("section")<SectionProps>``;

export const SectionContent = styled("div")<SectionProps>`
  @media screen and (max-width: 1280px) {
    padding-left: ${(props) => props.theme.general.gridGutter};
    padding-right: ${(props) => props.theme.general.gridGutter};
  }
`;

export const SectionItem = styled("div")<SectionItemProps>`
  ${(props) =>
    props.verticalSpacing === "xl" &&
    css`
      padding-top: ${(props) => props.theme.spacing.xl};
      padding-bottom: ${(props) => props.theme.spacing.xl};
    `}
  ${(props) =>
    props.verticalSpacing === "xxl" &&
    css`
      padding-top: ${(props) => props.theme.spacing.xxl};
      padding-bottom: ${(props) => props.theme.spacing.xxl};
    `}
  ${(props) =>
    props.bottomSpacing === "xxl" &&
    css`
      padding-bottom: ${(props) => props.theme.spacing.xxl};
    `}
`;

export const SectionItemContent = styled("div")`
  max-width: ${(props) => props.theme.general.gridMaxWidth};
  margin-left: auto;
  margin-right: auto;
`;
