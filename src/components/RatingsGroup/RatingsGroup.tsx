import { type JSX } from "react";
import * as Styled from "./styles/styled";
import Star from "../Star/Star";
import type { RatingsGroupProps } from "./RatingsGroup.types";
import ProgressBar from "../ProgressBar/ProgressBar";
import React from "react";

/**
 * RatingsGroup component displays a grid showing the distribution of reviews by star rating.
 *
 * Props:
 * - ratingsData: Record<number, number> - object mapping star ratings (1-5) to review counts
 * - mode: string (default "primary") - visual mode/style for the grid and children
 *
 * For each star rating (5 to 1), shows:
 * - The star rating number and icon
 * - A progress bar representing the percentage of reviews associated with that one star rating
 * - The count of reviews for that rating
 *
 * Accessibility:
 * - Uses aria-labels for screen readers on grid and columns
 */

const RatingsGroup = ({
  ratingsData,
  mode = "primary",
}: RatingsGroupProps): JSX.Element => {
  const totalReviews = Object.values(ratingsData).reduce((a, b) => a + b, 0);

  return (
    <Styled.GridContainer aria-label="Distribution of reviews by star rating">
      {Array.from({ length: 5 }, (_, index) => {
        // Calculate the star rating (5 to 1) whilst iterating from 0 to 4
        const reviewNumber = 5 - index;
        const count = ratingsData[reviewNumber] || 0;
        const progress = totalReviews ? (count / totalReviews) * 100 : 0;

        return (
          <React.Fragment key={reviewNumber}>
            <Styled.LeftColumn
              mode={mode}
              aria-label={`${reviewNumber} star rating`}
            >
              {reviewNumber}
              <Star isIcon mode={mode} aria-hidden="true" />
            </Styled.LeftColumn>
            <Styled.CentreColumn
              aria-label={`${Math.round(
                progress,
              )}% of reviews are ${reviewNumber} stars`}
            >
              <ProgressBar progress={progress} mode={mode} aria-hidden="true" />
            </Styled.CentreColumn>
            <Styled.RightColumn mode={mode} aria-label={`${count} reviews`}>
              {count}
            </Styled.RightColumn>
          </React.Fragment>
        );
      })}
    </Styled.GridContainer>
  );
};
export default RatingsGroup;
