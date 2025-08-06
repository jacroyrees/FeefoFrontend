import { renderWithTheme } from "../../test-utils";
import { screen } from "@testing-library/react";
import ReviewCard from "./ReviewCard";

describe("ReviewCard", () => {
  const ratingsData = {
    5: 952,
    4: 171,
    3: 55,
    2: 14,
    1: 40,
  };

  it("renders with correct rating and description", () => {
    renderWithTheme(
      <ReviewCard rating={4.8} mode="primary" ratingsData={ratingsData} />,
    );
    expect(screen.getByText("Exceptional")).toBeInTheDocument();
    expect(screen.getByText("4.8 out of 5")).toBeInTheDocument();
    expect(
      screen.getByLabelText("Review summary: Exceptional, 4.8 out of 5"),
    ).toBeInTheDocument();
  });

  it("renders with Excellent description for rating 4.2", () => {
    renderWithTheme(
      <ReviewCard rating={4.2} mode="primary" ratingsData={ratingsData} />,
    );
    expect(screen.getByText("Excellent")).toBeInTheDocument();
    expect(screen.getByText("4.2 out of 5")).toBeInTheDocument();
  });

  it("renders with Good description for rating 3.5", () => {
    renderWithTheme(
      <ReviewCard rating={3.5} mode="primary" ratingsData={ratingsData} />,
    );
    expect(screen.getByText("Good")).toBeInTheDocument();
    expect(screen.getByText("3.5 out of 5")).toBeInTheDocument();
  });

  it("renders with Poor description for rating 2.5", () => {
    renderWithTheme(
      <ReviewCard rating={2.5} mode="primary" ratingsData={ratingsData} />,
    );
    expect(screen.getByText("Poor")).toBeInTheDocument();
    expect(screen.getByText("2.5 out of 5")).toBeInTheDocument();
  });

  it("renders with Very Poor description for rating 1.5", () => {
    renderWithTheme(
      <ReviewCard rating={1.5} mode="primary" ratingsData={ratingsData} />,
    );
    expect(screen.getByText("Very Poor")).toBeInTheDocument();
    expect(screen.getByText("1.5 out of 5")).toBeInTheDocument();
  });

  it("renders Feefo logo based on mode", () => {
    renderWithTheme(
      <ReviewCard rating={4.8} mode="primary" ratingsData={ratingsData} />,
    );
    expect(screen.getByAltText("Feefo logo")).toBeInTheDocument();

    renderWithTheme(
      <ReviewCard rating={4.8} mode="secondary" ratingsData={ratingsData} />,
    );
    expect(screen.getAllByAltText("Feefo logo").length).toBeGreaterThan(0);
  });
  it("renders RatingsGroup and StarRatings", () => {
    renderWithTheme(
      <ReviewCard rating={4.8} mode="primary" ratingsData={ratingsData} />,
    );
    expect(
      screen.getByLabelText("Distribution of reviews by star rating"),
    ).toBeInTheDocument();
  });
});
