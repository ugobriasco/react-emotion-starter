module.exports = {
  extends: "prettier",
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    describe: true,
    beforeEach: true,
    it: true,
    test: true,
    expect: true,
    should: true,
    afterEach: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  }
};
