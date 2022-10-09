import { ComponentPropsWithRef, ReactNode, useState } from "react";
import * as S from "./Form.styles";
import uniqid from "uniqid";

export interface FormItemRenderProps {}

export type FormItemRender = (
  FormItemRenderProps: FormItemRenderProps
) => ReactNode;

export interface FormItemProps extends ComponentPropsWithRef<"div"> {
  id?: string;
  label?: ReactNode;
  role?: string;
  suffix?: ReactNode | boolean;
  render: FormItemRender;
}

export interface FormItemContentProps {
  suffix?: ReactNode;
}

export const FormItem = ({ id, ...args }: FormItemProps) => {
  const [Id] = useState<string>(id || uniqid("form-input-"));
  const [labelId] = useState<string>(id || uniqid("form-input-label-"));
  const { label, role, suffix, render } = args;
  const renderProps: FormItemRenderProps = {
    id: Id,
  };
  return (
    <S.FormItem
      role={role}
      aria-labelledby={role === "radiogroup" ? labelId : undefined}
      render={render}
      suffix={suffix}
    >
      {role === "radiogroup" ? (
        <S.FormItemLabel as="div" id={labelId}>
          {label}
        </S.FormItemLabel>
      ) : (
        <S.FormItemLabel htmlFor={Id}>{label}</S.FormItemLabel>
      )}
      <S.FormItemContent suffix={suffix}>
        {render(renderProps)}
        <S.FormItemSuffix>{suffix}</S.FormItemSuffix>
      </S.FormItemContent>
    </S.FormItem>
  );
};
