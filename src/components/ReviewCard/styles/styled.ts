import styled from "styled-components";
import { StarRatingContainer } from "../../StarRatings/styles/styled";
import type { ReviewCardProps } from "../ReviewCard.types";

export const CardContainer = styled.div<Pick<ReviewCardProps, "mode">>`
  padding: 40px 20px 20px;
  width: 100%;
  min-width: 100px;
  height: 100%;
  background-color: ${({ theme, mode }) =>
    mode === "primary" ? theme.colors["white"] : theme.colors["off-black"]};
  border-radius: 10px;
  flex-direction: column;
  text-align: center;
  border: 1px solid
    ${({ theme, mode }) =>
      mode === "primary" ? theme.colors["gray"] : theme.colors["white"]};
`;

export const TopContainer = styled.div<Pick<ReviewCardProps, "mode">>`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  ${StarRatingContainer} {
    margin: 16px 0;
  }
  gap: ${({ theme }) => theme.spacing["sm"]};
`;
export const Review = styled.strong<Pick<ReviewCardProps, "mode">>`
  color: ${({ theme, mode }) =>
    mode === "primary" ? theme.colors["off-black"] : theme.colors["white"]};
  font-size: ${({ theme }) => theme.fontSizes["xl"]};
  letter-spacing: ${({ theme }) => theme.fontStyles["letterSpacing"]};
  text-transform: ${({ theme }) => theme.fontStyles["textTransform"]};
`;

export const ProductSection = styled.div<Pick<ReviewCardProps, "mode">>`
  margin: 16px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing["md"]};
  @media (max-width: 468px) {
    flex-direction: column-reverse;
  }
`;

export const RatingText = styled.strong<Pick<ReviewCardProps, "mode">>`
  color: ${({ theme, mode }) =>
    mode === "primary" ? theme.colors["carbon"] : theme.colors["white"]};
  font-size: ${({ theme }) => theme.fontSizes["sm"]};
  text-transform: ${({ theme }) => theme.fontStyles["textTransform"]};
`;

export const ProductText = styled.strong<Pick<ReviewCardProps, "mode">>`
  color: ${({ theme, mode }) =>
    mode === "primary" ? theme.colors["carbon"] : theme.colors["white"]};
  font-size: ${({ theme }) => theme.fontSizes["lg"]};
`;

export const Image = styled.img<Pick<ReviewCardProps, "mode">>`
  width: 100px;
  height: auto;
`;
