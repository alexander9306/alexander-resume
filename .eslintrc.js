module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: ["formatjs"],
  ignorePatterns: [
    "node_modules",
    ".cache",
    "public",
    "gatsby-*.js",
    "es-message-formatter.js",
    ".eslintrc.js",
    "*.config.js",
  ],
  extends: ["airbnb-typescript", "prettier"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "react/prop-types": "off",
    "formatjs/no-offset": "error",
    "formatjs/enforce-default-message": ["error", "literal"],
    "formatjs/enforce-description": ["error", "literal"],
    "formatjs/enforce-placeholders": "error",
    "formatjs/no-emoji": "error",
    "formatjs/enforce-plural-rules": [
      "error",
      {
        one: true,
        other: true,
        zero: false,
      },
    ],
    "formatjs/no-camel-case": "error",
    "formatjs/no-multiple-plurals": "error",
    "formatjs/no-multiple-whitespaces": "error",
    "formatjs/enforce-id": [
      "off",
      {
        idInterpolationPattern: "[sha512:contenthash:base64:6]",
      },
    ],
  },
}
