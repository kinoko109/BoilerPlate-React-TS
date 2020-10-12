module.exports = {
  // ソースマップ有効
  mode: "development",
  // エントリーポイント
  entry: "./src/pages/index.tsx",
  // 出力設定
  output: {
    //  ディレクトリ名
    path: `${__dirname}/dist`,
    // ァイル名
    filename: "main.js"
  },
  module: {
    rules: [
      {
        // .ts, .tsx
        test: /\.tsx?$/,
        // TypeScriptコンパイル
        use: "ts-loader"
      }
    ]
  },
  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  devServer: {
    contentBase: "dist",
    open: true,
  }
};
