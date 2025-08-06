import * as Styled from "./styles/styled";
import type { StarProps } from "./Star.types";

/**
 * Star component renders a star SVG, used for ratings or as an icon.
 *
 * Props:
 * - rating: number (default 5) - the rating value for the star
 * - isIcon: boolean (default false) - whether the star is used as an icon
 * - mode: string (default "primary") - visual mode/style for the star
 */
const Star = ({ rating = 5, isIcon = false, mode = "primary" }: StarProps) => {
  const STAR_SVG_PATH =
    "M165.67 85.59c1.6-1.2.8-3.5-1-3.6l-27.6-2-10.5-25.6c-.7-1.7-3-1.7-3.7 0l-4.9 12c1.8 3.3 2.9 7 3.1 11.1.8 11.3-5.8 22-16.4 26h.1l-6.6 26.9c-.4 1.7 1.5 3.1 3 2.2l23.5-14.6 23.5 14.6c1.5.9 3.4-.4 3-2.2l-6.6-26.9 21.1-17.9Zm-82-.2 15.3 12.9c8-2.2 13.6-9.8 13.5-18.4l-27.6 2c-1.8.1-2.5 2.4-1.2 3.5Z";

  return (
    <Styled.StarContainer
      rating={rating}
      isIcon={isIcon}
      mode={mode}
      aria-hidden="true"
      data-testid="star-svg-container"
    >
      <Styled.Star
        isIcon={isIcon}
        mode={mode}
        rating={rating}
        preserveAspectRatio="xMidYMid meet"
        viewBox="83.0014 53.115 83.53 79.77"
        aria-hidden="true"
      >
        <path d={STAR_SVG_PATH} />
      </Styled.Star>
    </Styled.StarContainer>
  );
};

export default Star;
