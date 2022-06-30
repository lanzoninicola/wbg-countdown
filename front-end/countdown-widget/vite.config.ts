import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../../public/shortcode",
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        // this got rid of the hash on style.css
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            const type = "img";
            return `assets/${type}/[name].[ext]`;
          }
          // https://stackoverflow.com/questions/69744253/vite-build-always-using-static-paths
          // do not use this for fonts, breaks the source path in @font-face css
          // if (/woff2|woff/i.test(extType)) {
          //   const type = "fonts";
          //   return `assets/${type}/[name].[extname]`;
          // }

          return `assets/[name].[ext]`;
        },
      },
    },
  },
});
