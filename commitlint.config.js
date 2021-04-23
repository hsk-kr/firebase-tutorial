module.exports = {
  extends: [
    '@commitlint/config-conventional',
    '@commitlint/config-lerna-scopes',
  ],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        // workspace packages
        'auth-email-password',
        'eslint',
        '*',
      ],
    ],
  },
};
