module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  extends: [
    "plugin:prettier/recommended",
    "prettier"
  ],
  plugins: [
    "prettier",
    "@typescript-eslint"
  ],
  rules: {
    "sort-keys": 0,
    "no-console": 0
  },
  ignorePatterns: [
    "node_modules",
    "out",
    "dist",
    "**/*.d.ts"
  ]
}
