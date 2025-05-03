const react = require('eslint-plugin-react');
const globals = require('globals');

module.exports = [
  {
      files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
          plugins: {
      react,
  },
      languageOptions: {
          parserOptions: {
              ecmaFeatures: {
                  jsx: true,
              },
          },
          globals: {
          ...globals.browser,
          },
      },
      rules: {
          // ... any rules you want
          "semi": ["error", "always"],
          "quotes": ["error", "double"]
      },
      // ... others are omitted for brevity
  },
];