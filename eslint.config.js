const { FlatCompat } = require('@eslint/eslintrc')
const js = require('@eslint/js')
const typescriptEslintParser = require('@typescript-eslint/parser')
const globals = require('globals')

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})

module.exports = [
  js.configs.recommended,
  ...compat.extends('airbnb', 'airbnb-typescript', 'plugin:@typescript-eslint/recommended', 'prettier'),
  {
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
      globals: { ...globals.browser, ...globals.node },
    },
  },
  {
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': ['error'],
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/prefer-default-export': 'off',
      'no-shadow': 0,
      'no-console': 'warn',
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/semi': 'off',
      'no-debugger': 'error',
      'no-use-before-define': [
        'error',
        {
          functions: false,
          variables: false,
        },
      ],
      'no-undef': 'off',
      'no-restricted-globals': ['off'],
      'consistent-return': 'off',
      'no-plusplus': 'off',
      'prefer-destructuring': 'off',
      camelcase: 'warn',
      curly: 'error',
      eqeqeq: 'error',
      'no-param-reassign': ['error', { props: false }],
      'global-require': 0,
      'no-underscore-dangle': ['error', { allow: ['_data'] }],
      'object-curly-newline': ['error', { multiline: true }],
      'operator-linebreak': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'prettier/prettier': ['warn'],
      'jsx-a11y/label-has-associated-control': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allowCircularSelfDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
      'react/require-default-props': 0,
      'jsx-a11y/label-has-associated-control': [
        2,
        {
          some: ['nesting', 'id'],
        },
      ],
    },
  },
  ...compat.config({ env: { jest: true } }).map((config) => ({
    ...config,
    files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.spec.js', '**/*.spec.jsx'],
    rules: {
      ...config.rules,
    },
  })),
  { ignores: ['**/*/next.config.js', './.lint-staged.config.js', 'apps/**/.next/**/*'] },
]
