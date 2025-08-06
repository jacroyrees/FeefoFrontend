import styled from "styled-components";
import type { StarProps } from "../Star.types";

export const Star = styled.svg<StarProps>`
  position: relative;
  padding: ${({ isIcon }) => !isIcon && "10%"};
  path {
    fill: ${({ theme, isIcon, mode }) => {
      if (isIcon) {
        return theme.colors["gray"];
      }
      return mode === "primary"
        ? theme.colors["white"]
        : theme.colors["off-black"];
    }};
  }
`;

export const StarContainer = styled.span<StarProps>`
  ${({ isIcon }) =>
    isIcon
      ? `
  width: 20px;
  height: 20px;
  
`
      : `
  width: 44px;
  height: 44px;
  min-width: 44px;
  min-height: 44px;`}

  position: relative;
  overflow: hidden;
  border-radius: 10%;
  ${({ isIcon, theme, rating }) =>
    !isIcon &&
    `
    background-color: ${theme.colors["blue-light"]};
    &::before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      background-color: ${theme.colors["feefo-yellow"]};
      width: ${rating! * 100}%;
      height: 100%;
      pointer-events: none;
      border-top-left-radius: 10%;
      border-bottom-left-radius: 10%;
    }
  `}
`;
