/** @format */

// @ts-check
import { defineConfig } from "astro/config";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [],
  image: {
    remotePatterns: [],
  },
  vite: {
    css: {},
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
});
