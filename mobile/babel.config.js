module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ios.ts", ".android.ts", ".ts", ".ios.tsx", ".android.tsx", ".jsx", ".js", ".json"],
          alias: {
            "@screens": "./src/screens",
            "@styles": "./src/styles",
            "@components": "./src/components",
            "@assets": "./src/assets",
          },
        },
      ],
    ],
  }
}
