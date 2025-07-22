module.exports = {
  root: true,
  ignorePatterns: ["dist", "environment.prod.ts"],
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.app.json", "./tsconfig.spec.json"],
        createDefaultProgram: true,
      },
      rules: {
        "prettier/prettier": [
          "error",
          {
            endOfLine: "auto",
          },
        ],
        "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports-ts": "error",
        "unused-imports/no-unused-imports": "error",
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "app",
            style: "kebab-case",
          },
        ],
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "app",
            style: "camelCase",
          },
        ],
      },
      plugins: ["unused-imports"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
      ],
    },
    {
      files: ["*.html"],
      extends: [
        "plugin:prettier/recommended",
        "plugin:@angular-eslint/template/recommended",
      ],
      rules: {
        "prettier/prettier": [
          "warn",
          {
            endOfLine: "auto",
          },
        ],
      },
    },
  ],
};
