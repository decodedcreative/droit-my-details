import { ComponentPropsWithoutRef, ReactNode } from "react";
import * as S from "./Form.styles";
import { FormItem } from "./Form-Item";

export interface FormProps extends ComponentPropsWithoutRef<"form"> {
  children: ReactNode;
}

export const Form = ({ children, ...args }: FormProps) => (
  <S.Form>{children}</S.Form>
);

Form.Item = FormItem;
