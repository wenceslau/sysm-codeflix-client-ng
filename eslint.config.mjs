import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {languageOptions: {globals: globals.browser}},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "semi": [
        "error",
        "always"
      ],
      "quotes": [
        "error",
        "single"
      ],
      "no-unused-vars": "warn",
      "no-console": "warn",
      "no-undef": "warn",
      "no-constant-condition": "warn",
      "no-empty": "warn",
      "no-irregular-whitespace": "warn",
      "no-unreachable": "warn",
      "no-unsafe-negation": "warn",
      "no-unused-labels": "warn",
      "no-useless-catch": "warn",
      "no-prototype-builtins": "warn",
      "no-throw-literal": "warn",
      "no-unsafe-finally": "warn",
      "no-unsafe-optional-chaining": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
    }
  }
];
