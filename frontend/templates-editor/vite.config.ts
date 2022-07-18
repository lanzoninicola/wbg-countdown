import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import svgLoader from "vite-svg-loader";
import * as path from "path";

// VITE is used only for DEV mode.
// Due de fact that VITE builds the whole project without using IIFFE and could be colliding with other WP plugins

// https://github.com/vitejs/vite/issues/1078

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    svgLoader({
      defaultImport: "url", // or 'raw'
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      {
        find: "@test-utils",
        replacement: path.resolve(__dirname, "./src/__test__/utils"),
      },
      {
        find: "@countdown-provider",
        replacement: path.resolve(__dirname, "./src/countdown-provider"),
      },
    ],
  },
  // base: "",
  // build: {
  //   outDir: "../../public/templates-editor",
  //   sourcemap: false,
  //   rollupOptions: {
  //     output: {
  //       entryFileNames: `assets/[name].js`,
  //       // this got rid of the hash on style.css
  //       assetFileNames: (assetInfo) => {
  //         let extType = assetInfo.name
  //           .substring(assetInfo.name.length, assetInfo.name.length - 10)
  //           .split(".")
  //           .at(1);
  //         if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
  //           const type = "img";
  //           return `assets/${type}/[name].[ext]`;
  //         }

  //         // https://stackoverflow.com/questions/69744253/vite-build-always-using-static-paths
  //         // do not use this for fonts, breaks the source path in @font-face css
  //         // if (/woff2|woff/i.test(extType)) {
  //         //   const type = "fonts";
  //         //   return `assets/${type}/[name].[ext]`;
  //         // }

  //         return `assets/[name].[ext]`;
  //       },
  //     },
  //   },
  // },
});
