module.exports = {
  "extends": "../../.eslintrc.json",
  "ignorePatterns": ["!**/*", "dist"],
  "overrides": [
    {
      "files": ["*.ts"],
      "parserOptions": {
        "tsconfigRootDir": __dirname,
        "project": ["./tsconfig.app.json", "./tsconfig.spec.json"],
        "createDefaultProgram": true
      },
      "rules": {
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ],
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ]
      },
      "extends": [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates"
      ]
    },
    {
      "files": [
        "*.html"
      ],
      "extends": ["plugin:@angular-eslint/template/recommended"],
      "rules": {}
    }
  ]
};
