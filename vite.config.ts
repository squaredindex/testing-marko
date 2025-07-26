import { defineConfig } from "vite";
import marko from "@marko/vite";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    marko(),
    tailwindcss(),
  ],
});