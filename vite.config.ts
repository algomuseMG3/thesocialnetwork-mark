import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Standard Vite + React configuration
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
