// The initial ver of this file is from: https://jscomplete.com/learn/1rd-reactful Section 3
module.exports = {
    parser: "@babel/eslint-parser",
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      node: true,
      jest: true,
    },
    parserOptions: {
      ecmaVersion: 2020,
      ecmaFeatures: {
        impliedStrict: true,
        jsx: true,
      },
      sourceType: "module",
    },
    plugins: ["react", "react-hooks"],
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
    ],
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",      
  
      // You can do more rule customizations here...
      "indent": ["error", 4]
    },
  };