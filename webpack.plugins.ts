import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import TsConfigPathsWebpackPlugin from "tsconfig-paths-webpack-plugin";

export const plugins = [
  new ForkTsCheckerWebpackPlugin({
    logger: "webpack-infrastructure",
    async: true
  })
];

export function resolve(...extensions: string[]) {
  return {
    extensions,
    plugins: [new TsConfigPathsWebpackPlugin()]
  };
}
