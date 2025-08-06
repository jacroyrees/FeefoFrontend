import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StarRatings from "./StarRatings";
import { renderWithTheme } from "../../test-utils";

describe("StarRatings", () => {
  it("renders the correct aria-label", () => {
    renderWithTheme(<StarRatings rating={3.5} mode={"secondary"} />);
    const container = screen.getByRole("img");
    expect(container).toHaveAttribute(
      "aria-label",
      "Star rating: 3.5 out of 5",
    );
  });

  it("renders 5 stars", () => {
    renderWithTheme(<StarRatings rating={4} mode="secondary" />);
    const container = screen.getAllByTestId("star-svg-container");
    expect(container).toHaveLength(5);
  });

  it("sets aria-hidden on all stars", () => {
    renderWithTheme(<StarRatings rating={5} mode={"secondary"} />);
    const container = screen.getAllByTestId("star-svg-container");
    container.forEach((star) => {
      expect(star).toHaveAttribute("aria-hidden", "true");
    });
  });
});
