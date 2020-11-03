const disableA11y = () =>
  Object.keys(require('eslint-plugin-jsx-a11y').rules).reduce(
    (acc, current) => ({
      ...acc,
      [`jsx-a11y/${current}`]: 'off',
    }),
    {},
  )

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'react-app',
    'prettier',
    'prettier/react',
    // 'eslint:recommended',
    // 'plugin:react/recommended',
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', 'prettier', 'react', '@typescript-eslint'],
  rules: {
    ...disableA11y(),
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
    'jsx-quotes': [2, 'prefer-single'],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx', '.ts', '.js'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
      node: {
        paths: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
