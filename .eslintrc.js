// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  extends: ['plugin:vue/recommended'],
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': 1,
    'no-console': [1, {
      allow: ['warn', 'error'],
    }],
    'no-tabs': 1,
    'max-len': [1, {
      'code': 80,
        'comments': 80,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true,
    }],
    'vue/max-attributes-per-line': [1, {
      'singleline': 1,
      'multiline': {
        'max': 1,
        'allowFirstLine': false,
      },
    }],
    'no-unused-vars': 1,
    'comma-dangle': [1, 'always-multiline'],
    'linebreak-style': ['error', 'unix'],
  }
}
