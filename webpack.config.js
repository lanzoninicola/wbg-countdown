//./node_modules/@fontsource/inter/500.css

// TODO: ContextReplacementPlugin // date-fns project https://date-fns.org/v2.28.0/docs/webpack

const path = require("path");
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
  },
  // plugins: [new BundleAnalyzerPlugin()],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      // loading font from @fontsource npm package
      {
        test: /\.(scss|css)$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
};

const configPublic = Object.assign({}, config, {
  name: "configPublic",
  entry: {
    bundle: [path.resolve(__dirname, "./modules/shortcode/src/index.tsx")],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/public/"),
  },
});

const configAdmin = Object.assign({}, config, {
  name: "configAdmin",
  entry: {
    bundle: "./modules/admin/settings/src/index.tsx",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/admin/"),
  },
});

module.exports = [configPublic, configAdmin];
