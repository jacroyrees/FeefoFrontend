import Star from "../Star/Star";
import type { StarRatingsProps } from "./StarRatings.types";
import * as Styled from "./styles/styled";

/**
 * StarRatings component displays a row of 5 stars to represent a rating value.
 *
 * Props:
 * - rating: number - the rating value (can be fractional)
 * - mode: string (default "primary") - visual mode/style for the stars
 */

const StarRatings = ({ rating, mode = "primary" }: StarRatingsProps) => {
  /**
   * Calculates the fill value for each star based on the overall rating.
   * Returns 1 for a full star, a fractional value for a partial star, or 0 for an empty star.
   */
  const getStarRating = (rating: number, starIndex: number) => {
    const diff = rating - starIndex;
    return diff >= 1 ? 1 : diff;
  };

  return (
    <Styled.StarRatingContainer
      aria-label={`Star rating: ${rating} out of 5`}
      role="img"
    >
      {Array.from({ length: 5 }, (_: undefined, index: number) => (
        <Star
          key={index}
          rating={getStarRating(rating, index)}
          isIcon={false}
          mode={mode}
          aria-hidden="true"
        />
      ))}
    </Styled.StarRatingContainer>
  );
};

export default StarRatings;
