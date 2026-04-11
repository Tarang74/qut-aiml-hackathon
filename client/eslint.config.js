import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    // Allow explicit `any` in the ws layer where we wrap an untyped external boundary.
    files: ["src/ws/**"],
    rules: { "@typescript-eslint/no-explicit-any": "off" },
  },
);
