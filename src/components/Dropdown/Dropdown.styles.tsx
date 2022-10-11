import styled from "styled-components";
import Select from "react-select";

export const Dropdown = styled(Select)`
  width: 100%;
  border: 0;

  .Select__control {
    border-color: transparent;
    background-color: ${(props) => props.theme.colors.textfields};
    border-radius: 0;

    &--is-focused {
      border-color: ${(props) => props.theme.colors.interactive};
      outline: ${(props) => props.theme.general.focusWidth} solid transparent;
      outline-offset: ${(props) => props.theme.general.focusWidth};
      box-shadow: ${(props) => props.theme.general.focusBoxShadow};
    }

    &--is-disabled {
      .Select__value-container > * {
        color: ${(props) => props.theme.colors.text};
      }
    }

    &:hover {
      border-color: transparent;
    }
  }

  .Select__indicator-separator {
    background-color: transparent;
  }

  .Select__value-container > * {
    color: ${(props) => props.theme.colors.headings};
  }
`;
