/*eslint-env node, es6*/
module.exports = {
  root: true,
  parser: "babel-eslint",
  plugins: ["jest"],
  extends: [
    "eslint:recommended"
  ],
  env: {
    "jest/globals": true
  },
  rules: {
    "no-empty-function": "off"
  },
};
