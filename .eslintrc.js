/*eslint-env node, es6*/
module.exports = {
  root: true,
  parser: "babel-eslint",
  plugins: ["jest"],
  extends: [
    "eslint:recommended"
  ],
  rules: {
    "no-empty-function": "off"
  },
};
