//./node_modules/@fontsource/inter/500.css
// TODO: ContextReplacementPlugin // date-fns project https://date-fns.org/v2.28.0/docs/webpack

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const ENABLE_ANALYZER = false;

let plugins = [
  new MiniCssExtractPlugin({
    filename: "index.css",
  }),
];

if (ENABLE_ANALYZER === true) {
  plugins.push(new BundleAnalyzerPlugin());
}

const config = {
  mode: "production",
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    //   alias: {
    //     "@": path.resolve(__dirname, "src"),
    //   },
  },
  plugins: [...plugins],
  optimization: {
    minimizer: [new CssMinimizerPlugin(), "..."],
  },
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
    templateEditor: "./src/main.tsx",
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../../public/templates-editor/assets"),
  },
});

module.exports = [configPublic];
