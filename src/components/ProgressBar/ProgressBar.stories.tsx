import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import theme from "../../assets/theme";
import ProgressBar from "./ProgressBar";
import type { ProgressBarProps } from "./ProgressBar.types";

export const decorators = [
  (Story: any) => (
    <ThemeProvider theme={theme as DefaultTheme}>
      <Story />
    </ThemeProvider>
  ),
];

const meta: Meta<ProgressBarProps> = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  argTypes: {
    progress: { type: "number", min: 0, max: 100, step: 1 },
  },
};

export default meta;

type Story = StoryObj<ProgressBarProps>;

export const Default: Story = {
  args: {
    progress: 50,
  },
};
