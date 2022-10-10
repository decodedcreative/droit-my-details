import { forwardRef } from "react";
import { OptionsOrGroups, GroupBase } from "react-select";
import * as S from "./Dropdown.styles";
export interface DropdownProps {
  disabled?: boolean;
  name: string;
  options: string[];
  onChange?: any;
}

export const Dropdown = forwardRef<any, DropdownProps>(
  ({ disabled, options, name, onChange }: DropdownProps, ref) => {
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

    const handleSelectionChange = (option: any, action: any) => {
      if (onChange && option) {
        onChange(null, {
          [action.name]: option.value,
        });
      }
    };

    return (
      <S.Dropdown
        classNamePrefix="Select"
        isDisabled={disabled}
        name={name}
        options={optionsObjArray}
        onChange={handleSelectionChange}
        ref={ref}
      />
    );
  }
);
