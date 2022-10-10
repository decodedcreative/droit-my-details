import styled from "styled-components";
import Select from "react-select";

export const Dropdown = styled(Select)`
  width: 100%;
  border: 0;

  .Select__control {
    border-color: transparent;
    background-color: ${(props) => props.theme.colors.textfields};
  }

  .Select__indicator-separator {
    background-color: transparent;
  }

  .Select__value-container > * {
    color: ${(props) => props.theme.colors.headings};
  }
`;
