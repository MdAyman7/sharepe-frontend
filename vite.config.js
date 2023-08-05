import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    "/apis": {
      target: "https://sharepe.bitbns.com/v1/",
      secure: false,
      changeOrigin: false,
      ws: true,
    },
  },
});
