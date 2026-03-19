import { defineConfig } from "vite-plus";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  lint: {
    plugins: [
      "eslint",
      "jsx-a11y",
      "oxc",
      "promise",
      "react",
      "typescript",
      "unicorn",
    ],
    categories: {
      correctness: "warn",
      suspicious: "warn",
      pedantic: "warn",
      perf: "warn",
      // style: "warn",
      restriction: "warn",
      nursery: "warn",
    },
    env: {
      builtin: true,
      browser: true,
      serviceworker: true,
    },
    globals: {
      process: "readonly",
    },
    ignorePatterns: [
      "coverage/",
      "dist/",
      "playwright-report/",
      "storybook-static/",
      "test-results/",
    ],
    options: {
      typeAware: true,
      typeCheck: true,
    },
    rules: {
      "max-lines": "off",
      "max-lines-per-function": [
        "warn",
        {
          max: 200,
          skipComments: true,
          skipBlankLines: true,
        },
      ],
      "no-warning-comments": "off",
      "no-inline-comments": "off",
      "no-undefined": "off",
      "no-void": [
        "warn",
        {
          allowAsStatement: true,
        },
      ],
      "no-console": [
        "warn",
        {
          allow: ["debug", "warn", "info", "trace", "warn"],
        },
      ],
      "no-restricted-syntax": [
        "warn",
        {
          selector:
            "ImportDeclaration[source.value='react'][specifiers.0.type='ImportDefaultSpecifier']",
          message:
            "Default React import not allowed since we use the TypeScript jsx-transform. If you need a global type that collides with a React named export (such as `MouseEvent`), try using `globalThis.MouseHandler`",
        },
        {
          selector:
            "ImportDeclaration[source.value='react'] :matches(ImportNamespaceSpecifier)",
          message:
            "Named * React import is not allowed. Please import what you need from React with Named Imports",
        },
      ],
      "no-negated-condition": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "jsx-a11y/anchor-has-content": "off",
      "oxc/no-async-await": "off",
      "oxc/no-rest-spread-properties": "off",
      "react/button-has-type": "off",
      // TODO: remove when it supports tsx
      "react/jsx-filename-extension": "off",
      "react/no-multi-comp": "off",
      "react/react-in-jsx-scope": "off",
      "typescript/consistent-type-imports": [
        "warn",
        {
          disallowTypeAnnotations: false,
          fixStyle: "separate-type-imports",
          prefer: "type-imports",
        },
      ],
      "typescript/explicit-function-return-type": "off",
      "typescript/explicit-module-boundary-types": "off",
      "typescript/no-confusing-void-expression": "off",
      "typescript/no-unsafe-type-assertion": "off",
      "typescript/prefer-readonly-parameter-types": "off",
      "typescript/strict-boolean-expressions": "off",
      "unicorn/filename-case": [
        "warn",
        {
          case: "camelCase",
        },
      ],
      "vitest/consistent-vitest-vi": "warn",
      "vitest/no-importing-vitest-globals": "warn",
    },
  },
  plugins: [react(), tailwindcss()],
});
