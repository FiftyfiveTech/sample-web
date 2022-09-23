import path, { dirname } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "url";
import webpack from "webpack";
import dotenv from "dotenv";
import fs from "fs";

const getEnvKeys = (node_env) => {
  const basePath = "./.env";
  const envPath = basePath + "." + node_env;
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  const fileEnv = dotenv.config({ path: finalPath }).parsed;
  const keys = Object.keys(fileEnv);
  const envKeys = keys.reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  return envKeys;
};
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.tsx"),
  devtool: "inline-source-map",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ts|\.tsx|\.js|\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-typescript",
            "@babel/preset-react",
          ],
        },
      },
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            //Change the default maxSize of 8kb for putting the img in inline to 10kb
            maxSize: 10 * 1024,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "scss", "css"],
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@core": path.resolve(__dirname, "src/core"),
      "@services": path.resolve(__dirname, "src/services"),
      "@store": path.resolve(__dirname, "src/store"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@theme": path.resolve(__dirname, "src/theme"),
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    new webpack.DefinePlugin(getEnvKeys(process.env.NODE_ENV)),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
