import styled from "styled-components";
import type { RatingsGroupProps } from "../RatingsGroup.types";

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: auto 1fr auto;
  width: 100%;
  gap: ${({ theme }) => theme.spacing["xs"]};
`;

export const LeftColumn = styled.div<Omit<RatingsGroupProps, "ratingsData">>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: ${({ theme }) => theme.fontSizes["sm"]};
  gap: ${({ theme }) => theme.spacing["xs"]};
  color: ${({ theme, mode }) =>
    mode === "primary" ? theme.colors["dark-gray"] : theme.colors["white"]};
  font-weight: ${({ theme }) => theme.typography["fontWeightBold"]};
  white-space: nowrap;
`;

export const CentreColumn = styled.div`
  display: flex;
  align-items: center;
  min-height: 10px;
`;

export const RightColumn = styled.span<Omit<RatingsGroupProps, "ratingsData">>`
  color: ${({ theme, mode }) =>
    mode === "primary" ? theme.colors["dark-gray"] : theme.colors["white"]};
  font-weight: ${({ theme }) => theme.typography["fontWeightRegular"]};
  text-align: right;
  min-width: 40px;
`;
