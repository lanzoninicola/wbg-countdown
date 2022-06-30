import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const outJsFilename = "shortcode.js";
const outCssFilename = "shortcode.css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../../public/shortcode",
    rollupOptions: {
      output: {
        entryFileNames: `assets/${outJsFilename}`,
        // this got rid of the hash on style.css
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            const type = "img";
            return `assets/${type}/[name].[ext]`;
          }
          if (/woff2|woff/i.test(extType)) {
            const type = "fonts";
            return `assets/${type}/[name].[extname]`;
          }

          return `assets/${outCssFilename}`;
        },
      },
    },
  },
});
