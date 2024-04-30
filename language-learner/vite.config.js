import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  rollupOptions: {
    output: {
      entryFileNames: "static/js/[name].js",
      chunkFileNames: "static/js/[name].chunk.js",
    },
  },
});
