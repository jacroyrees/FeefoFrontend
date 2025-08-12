import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      "feefo-yellow": string;
      "off-black": string;
      carbon: string;
      "blue-light": string;
      gray: string;
      "dark-gray": string;
      white: string;
    };
    fontSizes: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontStyles: {
      fontSize: string;
      letterSpacing: string;
      textTransform: string;
    };
    typography: {
      fontWeightBold: number;
      fontWeightRegular: number;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    borderRadius: string;
  }
}
