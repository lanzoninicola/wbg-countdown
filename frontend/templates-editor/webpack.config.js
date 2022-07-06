//./node_modules/@fontsource/inter/500.css
// TODO: ContextReplacementPlugin // date-fns project https://date-fns.org/v2.28.0/docs/webpack

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

/* ---------------
 * Main config
 * We will place here all the common settings
 * ---------------*/
const config = {
  mode: "production",
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    // alias: {
    //   "countdown-provider": path.resolve(
    //     __dirname,
    //     "src",
    //     "countdown-provider"
    //   ),
    // },
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      // loading font from @fontsource npm package
      // {
      //   test: /\.(scss|css)$/i,
      //   use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
      // },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // load svg files
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};

const configPublic = Object.assign({}, config, {
  name: "configPublic",
  entry: {
    shortcode: "./src/main.tsx",
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../../public/templates-editor/assets"),
  },
});

module.exports = [configPublic];
