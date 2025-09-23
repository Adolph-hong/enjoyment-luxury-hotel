module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier' // 關閉和 Prettier 衝突的規則
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off', // React 17+ 不用再 import React
  },
}