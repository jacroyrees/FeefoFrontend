import styled from "styled-components";

export const StarRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  gap: ${({ theme }) => theme.spacing["xs"]};
`;
