import { type JSX } from "react";
import * as Styled from "./styles/styled";
import type { ProgressBarProps } from "./ProgressBar.types";

/**
 * ProgressBar component displays a styled progress bar.
 *
 * Props:
 * - progress: number - the current progress percentage (0-100)
 * - mode: string - visual mode/style for the progress bar
 *
 * Accessibility:
 * - Uses aria-label and role="progressbar" for screen readers.
 */

const ProgressBar = ({ progress, mode }: ProgressBarProps): JSX.Element => {
  return (
    <Styled.ProgressBar
      progress={progress}
      mode={mode}
      aria-label={`Progress: ${progress}%`}
      role="progressbar"
    />
  );
};

export default ProgressBar;
