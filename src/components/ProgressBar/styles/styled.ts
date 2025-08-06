import styled from "styled-components";
import type { ProgressBarProps } from "../ProgressBar.types";

export const ProgressBar = styled.span<ProgressBarProps>`
  display: flex;
  width: 100%;
  height: 12px;
  background-color: ${({ theme }) => theme.colors["blue-light"]};
  margin: 0;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ progress }) =>
      progress > 100 ? 100 : progress < 0 ? 0 : progress}%;
    height: 12px;
    background-color: ${({ theme }) => theme.colors["feefo-yellow"]};
    margin: 0;
  }
`;
