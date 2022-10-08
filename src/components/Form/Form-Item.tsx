import { ReactNode } from "react";
import * as S from "./Form.styles";

export interface FormItemRenderProps {}

export type FormItemRender = (
  FormItemRenderProps: FormItemRenderProps
) => ReactNode;

export interface FormItemProps {
  label: ReactNode;
  render: FormItemRender;
}

export const FormItem = ({ ...args }: FormItemProps) => {
  const { label, render } = args;
  const renderProps: FormItemRenderProps = {};
  return (
    <S.FormItem>
      <S.FormItemLabel>{label}</S.FormItemLabel>
      <S.FormItemContent>{render(renderProps)}</S.FormItemContent>
    </S.FormItem>
  );
};
