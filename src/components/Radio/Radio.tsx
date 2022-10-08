import { ComponentPropsWithoutRef, forwardRef } from "react";
import * as S from "./Radio.styles";

export interface RadioInputProps extends ComponentPropsWithoutRef<"input"> {}

export interface RadioProps extends RadioInputProps {
  label: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, ...props }, ref) => {
    const wrapperProps = {
      label,
    };

    const inputProps = {
      ...props,
    };

    return (
      <S.Radio {...wrapperProps}>
        <S.RadioInput {...inputProps} ref={ref} />
        <S.RadioLabel>
          <S.RadioBackground>
            <S.RadioIndicator />
          </S.RadioBackground>
          <S.RadioText>{label}</S.RadioText>
        </S.RadioLabel>
      </S.Radio>
    );
  }
);
