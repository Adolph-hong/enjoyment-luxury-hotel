module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module', 
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],

    // ↓ 這兩條解掉 import 類型的噪音
    'import/extensions': ['error', 'ignorePackages', { js: 'never', jsx: 'never' }],
    'import/prefer-default-export': 'off',

    // 可選：開發時允許 console（或改成 'warn'）
    'no-console': 'off',
  },
}
