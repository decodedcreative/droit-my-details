import colors from "./colors";
import general from "./general";
import spacing from "./spacing";
import typography from "./typography";

const lightTheme = {
  name: "lightTheme",
  colors,
  general,
  spacing,
  typography,
};

export interface ThemeProps {
  name: string;
  colors: {
    active: string;
    background: string;
    borders: string;
    headings: string;
    interactive: string;
    page: string;
    text: string;
  };
  general: {
    borderRadius: string;
    borderWidth: string;
    gridGutter: string;
    gridMaxWidth: string;
  };
  spacing: {
    lg: string;
    md: string;
    sm: string;
    xl: string;
    xs: string;
    xxl: string;
    xxs: string;
  };
  typography: {
    fontFamily: string;
    fontSize: string;
    lineHeight: number;
    sizes: {
      default: string;
      lg: string;
      md: string;
      sm: string;
      xl: string;
      xs: string;
      xxl: string;
      xxxl: string;
    };
    weights: {
      bold: string;
      default: string;
      medium: string;
    };
  };
}

export default lightTheme;
