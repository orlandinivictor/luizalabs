import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "v8",
      enabled: true,
      reporter: ["text", "json", "html"],
      all: true,
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/**/*{.interface,styles,.spec}.{ts,tsx}",
        "src/**/assets/*",
        "src/pages",
        "src/*.{ts,tsx}",
      ],
      thresholds: {
        functions: 70,
        branches: 70,
        lines: 70,
        statements: 70,
      },
    },
  },
});
