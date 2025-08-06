import { render } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme";

export function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}
