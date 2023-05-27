import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        main: resolve(__dirname, "pages/destination.html"),
        main: resolve(__dirname, "pages/crew.html"),
        main: resolve(__dirname, "pages/technology.html"),
      },
    },
  },
});
