import styled, { css } from "styled-components";
import { FormItemContentProps, FormItemProps } from "./Form-Item";

export const Form = styled("form")``;

export const FormItem = styled("div")<FormItemProps>`
  display: grid;
  border: 0;
  margin: 0 0 ${(props) => props.theme.spacing.lg} 0;
  padding: 0;
  row-gap: ${(props) => props.theme.spacing.xs};
`;

export const FormItemLabel = styled("label")`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-weight: ${(props) => props.theme.typography.weights.bold};
  font-size: ${(props) => props.theme.typography.sizes.sm};
  padding: 0;
`;

export const FormItemContent = styled("div")<FormItemContentProps>`
  display: flex;
  gap: ${(props) => props.theme.spacing.lg};
  row-gap: ${(props) => props.theme.spacing.lg};

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }

  ${(props) =>
    props.suffix &&
    css`
      @media screen and (min-width: 641px) {
        display: grid;
        grid-template-columns: 1fr 25%;
      }
    `}
`;

export const FormItemSuffix = styled("div")`
  display: flex;
  align-items: center;
`;
