import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config
export default defineConfig({
  root: fileURLToPath(new URL("./src/renderer", import.meta.url)),
  plugins: [react(), tailwindcss()],
});
