import styled, { css } from "styled-components";

export const Form = styled("form")``;

export const FormItem = styled("div")`
  display: grid;
  border: 0;
  margin: 0 0 ${(props) => props.theme.spacing.lg} 0;
  padding: 0;
  row-gap: ${(props) => props.theme.spacing.xs};
`;

export const FormItemLabel = styled("label")`
  color: ${(props) => props.theme.colors.text};
  font-weight: ${(props) => props.theme.typography.weights.bold};
  font-size: ${(props) => props.theme.typography.sizes.sm};
`;

export const FormItemContent = styled("div")`
  display: flex;
  gap: ${(props) => props.theme.spacing.lg};
  row-gap: ${(props) => props.theme.spacing.lg};

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;
