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
      black: string;
    };
    fonts: string[];
    fontSizes: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontStyles: {
      fontFamily: string;
      fontWeight: string;
      fontSize: string;
      letterSpacing: string;
      textTransform: string;
    };
    typography: {
      fontFamily: string;
      fontWeightBold: number;
      fontWeightRegular: number;
      headings: {
        fontSize: string;
        textTransform: string;
        letterSpacing: string;
        colorLightBg: string;
        colorDarkBg: string;
      };
      body: {
        fontSize: string;
        colorLightBg: string;
        colorDarkBg: string;
      };
      rating: {
        valueSize: string;
        labelSize: string;
      };
    };
    stars: {
      filledStarColor: string;
      unfilledStarColor: string;
      iconColorOnLight: string;
      iconColorOnDark: string;
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
