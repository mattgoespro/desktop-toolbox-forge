import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default tseslint.config([
  tseslint.configs.recommended,
  {
    ignores: ["**/node_modules/**", "**/.webpack/**", "**/.react-router/**"]
  },
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      js
    },
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        extends: ["js/recommended"],
        version: "detect"
      }
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "react/react-in-jsx-scope": "off"
    }
  }
]);
