import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,        // Dev server port
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Backend API
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

