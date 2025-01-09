// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        mainpl: resolve(__dirname, "pl/index.html"),
        contact: resolve(__dirname, "contact.html"),
        contactpl: resolve(__dirname, "pl/contact.html"),
        faq: resolve(__dirname, "faq.html"),
        faqpl: resolve(__dirname, "pl/faq.html"),
        founder: resolve(__dirname, "founder.html"),
        founderpl: resolve(__dirname, "pl/founder.html"),
      },
    },
  },
});
