import { ComponentPropsWithRef, forwardRef, ReactNode } from "react";
import * as S from "./Button.styles";
export interface ButtonProps extends ComponentPropsWithRef<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "link";
  media?: ReactNode;
  size?: "small";
  type?: "button" | "reset" | "submit";
  as?: React.ElementType | keyof JSX.IntrinsicElements;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, media, size, type = "button", ...args }, ref) => (
    <S.Button size={size} {...args} ref={ref}>
      {media ? <S.ButtonMedia>{media}</S.ButtonMedia> : null}
      <span>{children}</span>
    </S.Button>
  )
);
