module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: [
    "node_modules",
    ".cache",
    "public",
    "gatsby-*.js",
    ".eslintrc.js",
    "*.config.js",
  ],
  extends: ["airbnb-typescript", "prettier"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "react/prop-types": "off",
  },
}
