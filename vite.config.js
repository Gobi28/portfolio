import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If deploying to https://<username>.github.io/<repo-name>/, set base to '/<repo-name>/'
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
});
