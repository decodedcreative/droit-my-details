import { ComponentPropsWithoutRef, forwardRef } from "react";
import * as S from "./Radio.styles";
import uniqid from "uniqid";

export interface RadioInputProps extends ComponentPropsWithoutRef<"input"> {}

export interface RadioProps extends RadioInputProps {
  label: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ id = uniqid("form-radio-"), label, ...props }, ref) => {
    const wrapperProps = {
      label,
    };

    const inputProps = {
      id,
      ...props,
    };

    return (
      <S.Radio {...wrapperProps}>
        <S.RadioInput {...inputProps} ref={ref} />
        <S.RadioLabel htmlFor={id}>
          <S.RadioBackground>
            <S.RadioIndicator />
          </S.RadioBackground>
          <S.RadioText>{label}</S.RadioText>
        </S.RadioLabel>
      </S.Radio>
    );
  }
);
