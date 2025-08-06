/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  test: {
    projects: [
      // ✅ Unit Test Project
      {
        extends: true,
        test: {
          name: "unit",
          globals: true,
          environment: "jsdom",
          setupFiles: "./vitest.setup.ts",
          include: ["src/**/*.{test,spec}.{ts,tsx}"],
          coverage: {
            reporter: ["text", "html"],
          },
        },
      },
    ],
  },
});
