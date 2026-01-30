import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";


const isGithubPages = process.env.DEPLOY_ENV === "GH_PAGES";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: isGithubPages ? "/B12A7-Customer-Support-Zone/" : "/",
});
