import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // 忽略 dist
  globalIgnores(['dist']),

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['node_modules', 'dist'],
    languageOptions: {
      parser: tseslint.parser, // ✅ 使用 TypeScript Parser
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json', // ✅ 指向 TS 設定
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint.plugin,
    },
    extends: [
      js.configs.recommended, // 基本 JS 規則
      ...tseslint.configs.recommended, // ✅ TS 規則
      react.configs.flat.recommended, // React 基本規則
      reactHooks.configs['recommended-latest'], // React Hooks
      reactRefresh.configs.vite, // 熱重載專用
      prettier, // 關閉與 Prettier 重疊的規則
    ],
    rules: {
      // 你可以在這裡放專案自訂規則
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react/react-in-jsx-scope': 'off', // React 17+ 不需要 import React
      '@typescript-eslint/no-unused-vars': ['warn'],
    },
    settings: {
      react: { version: 'detect' },
    },
  },
])
