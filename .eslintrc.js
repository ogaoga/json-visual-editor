module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      0
    ],
    "no-unused-vars": [
      1,
      {
        "vars": "all",
        "args": "after-used",
        "varsIgnorePattern": "React"
      }
    ],
    "react/jsx-uses-vars": 2,
    "no-console": 1
  }
};
