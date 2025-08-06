import { screen } from "@testing-library/react";

import RatingsGroup from "./RatingsGroup";
import { renderWithTheme } from "../../test-utils";

describe("RatingsGroup", () => {
  const ratingsData = {
    5: 80,
    4: 10,
    3: 5,
    2: 3,
    1: 2,
  };

  it("renders all star ratings and counts", () => {
    renderWithTheme(<RatingsGroup ratingsData={ratingsData} mode="primary" />);
    for (let i = 5; i >= 1; i--) {
      expect(screen.getByLabelText(`${i} star rating`)).toBeInTheDocument();
      expect(
        screen.getByLabelText(`${ratingsData[i]} reviews`),
      ).toBeInTheDocument();
    }
  });

  it("renders correct progress for each star", () => {
    renderWithTheme(<RatingsGroup ratingsData={ratingsData} mode="primary" />);
    const total = Object.values(ratingsData).reduce((a, b) => a + b, 0);
    for (let i = 5; i >= 1; i--) {
      const progress = total ? Math.round((ratingsData[i] / total) * 100) : 0;
      expect(
        screen.getByLabelText(`${progress}% of reviews are ${i} stars`),
      ).toBeInTheDocument();
    }
  });

  it("is accessible with grid container label", () => {
    renderWithTheme(<RatingsGroup ratingsData={ratingsData} mode="primary" />);
    expect(
      screen.getByLabelText("Distribution of reviews by star rating"),
    ).toBeInTheDocument();
  });

  it("renders with zero reviews", () => {
    const emptyData = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    renderWithTheme(<RatingsGroup ratingsData={emptyData} mode="primary" />);
    for (let i = 5; i >= 1; i--) {
      expect(screen.getByLabelText(`${i} star rating`)).toBeInTheDocument();
      expect(
        screen.getByLabelText(`0% of reviews are ${i} stars`),
      ).toBeInTheDocument();
    }
  });
});
