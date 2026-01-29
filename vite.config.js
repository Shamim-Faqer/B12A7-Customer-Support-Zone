import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/B12A7-Customer-Support-Zone/",
  server: {
    // Development only: সব host allow
    allowedHosts: 'all'
  }
});
