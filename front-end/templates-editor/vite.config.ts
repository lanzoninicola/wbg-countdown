import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgLoader from "vite-svg-loader";

const outJsFilename = "editor.js";
const outCssFilename = "editor.css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgLoader({
      defaultImport: "url", // or 'raw'
    }),
  ],
  build: {
    outDir: "../../public/templates-editor",
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
