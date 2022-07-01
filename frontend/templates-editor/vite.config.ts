import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgLoader({
      defaultImport: "url", // or 'raw'
    }),
  ],
  base: "",
  build: {
    outDir: "../../public/templates-editor",
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        // this got rid of the hash on style.css
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name
            .substring(assetInfo.name.length, assetInfo.name.length - 10)
            .split(".")
            .at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            const type = "img";
            return `assets/${type}/[name].[ext]`;
          }

          // https://stackoverflow.com/questions/69744253/vite-build-always-using-static-paths
          // do not use this for fonts, breaks the source path in @font-face css
          // if (/woff2|woff/i.test(extType)) {
          //   const type = "fonts";
          //   return `assets/${type}/[name].[ext]`;
          // }

          return `assets/[name].[ext]`;
        },
      },
    },
  },
});
