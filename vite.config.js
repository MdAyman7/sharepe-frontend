import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/v1/apis": {
        target: "https://sharepe.bitbns.com/",
        secure: true,
        changeOrigin: true,
      },
    },
  },
});
