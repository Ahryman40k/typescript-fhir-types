module.exports = {
  extends: ['@commitlint/config-conventional'], // => commitlint/config-conventional
  rules: {
    'body-max-line-length': [2, 'always', 200],
  },
};
