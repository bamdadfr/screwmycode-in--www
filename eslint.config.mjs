import eslint from '@eslint/js';
import json from '@eslint/json';
import stylisticPlugin from '@stylistic/eslint-plugin';
import deMorgan from 'eslint-plugin-de-morgan';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tslint from 'typescript-eslint';

const reactPlugins = {
  'react': reactPlugin,
  'react-hooks': reactHooksPlugin,
  'react-refresh': reactRefreshPlugin,
};

const reactRules = {
  ...reactPlugin.configs.recommended.rules,
  ...reactHooksPlugin.configs.recommended.rules,
  'react/react-in-jsx-scope': 'off',
  'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
  'react/jsx-curly-brace-presence': ['error', 'never'],
  'react-hooks/exhaustive-deps': 'error',
  'react/jsx-tag-spacing': [
    'error',
    {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'allow',
    },
  ],
};

const defaultPlugins = {
  'import': importPlugin,
  'simple-import-sort': simpleImportSortPlugin,
  '@stylistic': stylisticPlugin,
};

const defaultRules = {
  // globals
  'object-shorthand': ['error', 'always'],
  'no-nested-ternary': 'error',
  'eqeqeq': 'error',
  'new-cap': 'error',
  'no-var': 'error',
  'curly': ['error', 'all'],
  // import plugin
  'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
  // simple-import-sort plugin
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error',
  // stylistic js plugin
  '@stylistic/semi': ['error', 'always'],
  '@stylistic/quote-props': ['error', 'consistent'],
  '@stylistic/quotes': ['error', 'single', {avoidEscape: true}],
  '@stylistic/padded-blocks': ['error', 'never'],
  '@stylistic/indent': ['error', 2],
  '@stylistic/comma-dangle': ['error', 'always-multiline'],
  '@stylistic/brace-style': ['error', '1tbs'],
  '@stylistic/multiline-comment-style': ['error', 'separate-lines'],
  '@stylistic/no-multi-spaces': 'error',
  '@stylistic/no-whitespace-before-property': 'error',
  '@stylistic/space-before-blocks': ['error', 'always'],
  '@stylistic/keyword-spacing': ['error', {before: true, after: true}],
  '@stylistic/space-before-function-paren': [
    'error',
    {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    },
  ],
  '@stylistic/function-call-spacing': ['error', 'never'],
  '@stylistic/block-spacing': ['error', 'never'],
  '@stylistic/object-curly-spacing': ['error', 'never'],
  '@stylistic/object-curly-newline': ['error', {consistent: true}],
  '@stylistic/space-infix-ops': 'error',
  '@stylistic/space-unary-ops': 'error',
  '@stylistic/space-in-parens': 'error',
  '@stylistic/eol-last': ['error', 'always'],
  '@stylistic/semi-style': ['error', 'last'],
  '@stylistic/new-parens': 'error',
  '@stylistic/lines-between-class-members': 'error',
  '@stylistic/no-multiple-empty-lines': ['error', {max: 1}],
  '@stylistic/arrow-spacing': ['error', {before: true, after: true}],
  '@stylistic/arrow-parens': ['error', 'always'],
  '@stylistic/key-spacing': [
    'error',
    {
      beforeColon: false,
      afterColon: true,
    },
  ],
  '@stylistic/comma-spacing': ['error', {before: false, after: true}],
  // stylistic ts plugin
  '@stylistic/type-annotation-spacing': [
    'error',
    {
      before: false,
      after: true,
      overrides: {
        arrow: {
          before: true,
        },
      },
    },
  ],
  '@stylistic/member-delimiter-style': [
    'error',
    {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
      multilineDetection: 'brackets',
    },
  ],
  '@typescript-eslint/no-unused-vars': 'warn',
};

const reactThreeFiberRules = {
  'react/no-unknown-property': [
    'error',
    {
      ignore: [
        'args',
        'attach',
        'object',
        'dispose',
        'vertexShader',
        'fragmentShader',
        'uniforms',
      ],
    },
  ],
};

const defaultConfig = [
  {
    ignores: [
      'tsconfig.json',
      '**/.vite/*',
      '**/dev/**',
      '**/dist/**',
      '**/tests/**',
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
  },
  json.configs.recommended,
  eslint.configs.recommended,
  deMorgan.configs.recommended,
  ...tslint.configs.strict,
  ...tslint.configs.stylistic,
  {
    files: ['**/*.{js,cjs,mjs,ts}'],
    plugins: defaultPlugins,
    rules: defaultRules,
  },
];

export default [
  ...defaultConfig,
  {
    files: ['**/*.{js,cjs,mjs,ts,jsx,tsx}'],
    plugins: {
      ...defaultPlugins,
      ...reactPlugins,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...defaultRules,
      ...reactRules,
      ...reactThreeFiberRules,
    },
  },
];
