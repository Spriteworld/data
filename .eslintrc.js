/*eslint-env node, es6*/
module.exports = {
  root: true,
  parser: "babel-eslint",
  plugins: ["jest"],
  parserOptions: {
    "sourceType": "module"
  },
  extends: [
    "eslint:recommended"
  ],
  env: {
    "jest/globals": true,
    "node": true,
  },
  rules: {
    "no-empty-function": "off"
  },
};
