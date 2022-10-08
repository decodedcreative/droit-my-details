import { ComponentPropsWithoutRef, forwardRef } from "react";
import * as S from "./Textfield.styles";

export interface TextfieldProps extends ComponentPropsWithoutRef<"input"> {}

export const Textfield = forwardRef<HTMLInputElement, TextfieldProps>(
  ({ "aria-invalid": ariaInvalid, required, type = "text", ...props }, ref) => (
    <S.Textfield
      aria-invalid={ariaInvalid}
      aria-required={required}
      ref={ref}
      type={type}
      {...props}
    />
  )
);
