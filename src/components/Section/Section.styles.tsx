import styled, { css } from "styled-components";
import {
  SectionProps,
  SectionItemProps,
  SectionItemContentProps,
} from "./Section";

export const Section = styled("section")<SectionProps>`
  border: 0;
  padding: 0;
  margin: 0;
`;

export const SectionContent = styled("div")<SectionProps>`
  padding-bottom: 8px;

  ${(props) =>
    props.border === "bottom" &&
    css`
      border-bottom: ${(props) => props.theme.general.borderWidth} solid
        ${(props) => props.theme.colors.borders};
    `}

  @media screen and (max-width: 960px) {
    margin-left: ${(props) => props.theme.general.gridGutter};
    margin-right: ${(props) => props.theme.general.gridGutter};
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
    props.topSpacing === "xl" &&
    css`
      padding-top: ${(props) => props.theme.spacing.xl};
    `}
  ${(props) =>
    props.verticalSpacing === "xxl" &&
    css`
      padding-top: ${(props) => props.theme.spacing.xxl};
      padding-bottom: ${(props) => props.theme.spacing.xxl};
    `}

  ${(props) =>
    props.bottomSpacing === "xl" &&
    css`
      padding-bottom: ${(props) => props.theme.spacing.xl};
    `}

  ${(props) =>
    props.bottomSpacing === "xxl" &&
    css`
      padding-bottom: ${(props) => props.theme.spacing.xxl};
    `}
`;

export const SectionItemContent = styled("div")<SectionItemContentProps>`
  max-width: ${(props) => props.theme.general.gridMaxWidth};
  margin-left: auto;
  margin-right: auto;

  ${(props) =>
    props.columns &&
    css`
      @media screen and (min-width: 641px) {
        display: grid;
        column-gap: ${(props) => props.theme.general.gridGutter};
        grid-template-columns: ${Array.from(Array(props.columns))
          .map((item) => "1fr")
          .join(" ")};
      }
    `}
`;
