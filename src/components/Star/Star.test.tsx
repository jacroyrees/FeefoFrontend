import Star from "./Star";
import { renderWithTheme } from "../../test-utils";

describe("Star", () => {
  it("renders correctly with default props", () => {
    const { container } = renderWithTheme(<Star rating={3} isIcon={false} />);
    const svg = container.querySelector("svg");
    const path = container.querySelector("path");

    expect(svg).toBeInTheDocument();
    expect(path).toBeInTheDocument();
  });

  it("renders as icon when isIcon is true", () => {
    const { container } = renderWithTheme(<Star rating={5} isIcon />);
    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
  });
});
