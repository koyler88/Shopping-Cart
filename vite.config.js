import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    gloabls: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
  },
});
