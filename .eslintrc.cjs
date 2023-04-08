/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        printWidth: 80,
        trailingComma: 'none',
        endOfLine: 'auto'
      }
    ],
    'vue/multi-word-component-names': 'off' /*[
      'warn',
      {
        ignores: ['index']
      }
    ]*/,
    'vue/no-setup-props-destructure': ['off']
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    '.eslintrc-auto-import'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
