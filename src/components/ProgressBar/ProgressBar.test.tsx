import { screen } from "@testing-library/react";
import ProgressBar from "./ProgressBar";
import { renderWithTheme } from "../../test-utils";

describe("ProgressBar", () => {
  it("renders with correct progress and mode", () => {
    renderWithTheme(<ProgressBar progress={75} mode="primary" />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveAttribute("aria-label", "Progress: 75%");
    expect(progressBar).toHaveAttribute("role", "progressbar");
  });

  it("renders with different progress value", () => {
    renderWithTheme(<ProgressBar progress={40} mode="secondary" />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveAttribute("aria-label", "Progress: 40%");
  });
});
