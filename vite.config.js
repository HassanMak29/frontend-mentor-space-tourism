import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        pages: resolve(__dirname, "pages/destination.html"),
        pages: resolve(__dirname, "pages/crew.html"),
        pages: resolve(__dirname, "pages/technology.html"),
      },
    },
  },
});
