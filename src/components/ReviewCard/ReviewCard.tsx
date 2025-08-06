import RatingsGroup from "../RatingsGroup/RatingsGroup";
import StarRatings from "../StarRatings/StarRatings";
import type { ReviewCardProps } from "./ReviewCard.types";
import * as Styled from "./styles/styled";
import feefoPrimaryLogo from "/feefoPrimary.png";
import feefoSecondaryLogo from "/feefoSecondary.png";

/**
 * ReviewCard component displays a summary of a product's review rating and distribution.
 *
 * Props:
 * - rating: number - the average rating value
 * - mode: string (default "primary") - visual mode/style for the card
 *
 * Layout:
 * - Top section: rating description, star ratings, numeric rating, product info, logo
 * - Bottom section: ratings distribution grid
 */
const ReviewCard = ({
  rating,
  mode = "primary",
  ratingsData,
}: ReviewCardProps) => {
  /**
   * Returns a descriptive label for the given rating value.
   * 4.7+ = Exceptional, 4+ = Excellent, 3+ = Good, 2+ = Poor, else Very Poor
   */
  const getRatingDescription = (rating: number): string => {
    if (rating >= 4.7) {
      return "Exceptional";
    } else if (rating >= 4) {
      return "Excellent";
    } else if (rating >= 3) {
      return "Good";
    } else if (rating >= 2) {
      return "Poor";
    } else {
      return "Very Poor";
    }
  };

  return (
    <Styled.CardContainer
      mode={mode}
      aria-label={`Review summary: ${getRatingDescription(rating)}, ${rating} out of 5`}
    >
      <Styled.TopContainer>
        <Styled.Review mode={mode}>
          {getRatingDescription(rating)}
        </Styled.Review>
        <StarRatings rating={rating} mode={mode} aria-hidden="true" />
        <Styled.RatingText mode={mode}>{rating} out of 5</Styled.RatingText>
        <Styled.ProductSection>
          <Styled.ProductText mode={mode}>Product Rating</Styled.ProductText>
          <Styled.Image
            src={mode === "primary" ? feefoPrimaryLogo : feefoSecondaryLogo}
            alt="Feefo logo"
          />
        </Styled.ProductSection>
      </Styled.TopContainer>

      <RatingsGroup ratingsData={ratingsData} mode={mode} />
    </Styled.CardContainer>
  );
};

export default ReviewCard;
