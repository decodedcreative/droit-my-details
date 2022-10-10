import { forwardRef } from "react";
import { OptionsOrGroups, GroupBase } from "react-select";
import * as S from "./Dropdown.styles";
export interface DropdownProps {
  disabled?: boolean;
  options: string[];
  onChangeMethod?: any;
}

export const Dropdown = forwardRef<any, DropdownProps>(
  ({ disabled, options, onChangeMethod }: DropdownProps, ref) => {
    let optionsObjArray:
      | OptionsOrGroups<unknown, GroupBase<unknown>>
      | undefined = [];

    if (typeof options !== "string") {
      optionsObjArray =
        options &&
        options.map((option) => {
          return {
            value: option,
            label: option,
          };
        });
    } else {
      optionsObjArray = [
        {
          label: options,
          value: options,
        },
      ];
    }

    const handleSelectionChange = (option: any) => {
      if (onChangeMethod && option) {
        onChangeMethod(option.value);
      }
    };

    return (
      <S.Dropdown
        isDisabled={disabled}
        options={optionsObjArray}
        onChange={handleSelectionChange}
        ref={ref}
      />
    );
  }
);
