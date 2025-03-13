import { FlatCompat } from "@eslint/eslintrc"
import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import typescriptPlugin from "@typescript-eslint/eslint-plugin"
import typescriptParser from "@typescript-eslint/parser"
import prettierPlugin from "eslint-plugin-prettier"

const compat = new FlatCompat()

export default [
  // Cấu hình cơ bản cho môi trường
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: typescriptParser, // Sử dụng TypeScript parser
      ecmaVersion: 2022, // Hỗ trợ ES2022
      sourceType: "module", // Dạng module
      globals: {
        window: true,
        document: true,
        console: true,
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "@typescript-eslint": typescriptPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error", // Kiểm tra định dạng code với Prettier
      "react/react-in-jsx-scope": "off", // Không cần import React ở JSX (React 17+)
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        "allowShortCircuit": true,
        "allowTernary": true
      }
    ],
      "@typescript-eslint/no-unused-vars": [
      "error",
      { "varsIgnorePattern": "^_", "argsIgnorePattern": "^_" }
    ]

    
    },
    settings: {
      react: {
        version: "detect", // Tự động phát hiện version của React
      },
    },
  },

  // Tích hợp các cấu hình "compat" nếu cần
  ...compat.extends("plugin:@typescript-eslint/recommended"),
  ...compat.extends("plugin:prettier/recommended"),
]
