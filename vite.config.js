import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        destination: resolve(__dirname, "pages/destination.html"),
        crew: resolve(__dirname, "pages/crew.html"),
        technology: resolve(__dirname, "pages/technology.html"),
      },
    },
  },
});
