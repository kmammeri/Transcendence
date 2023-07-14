module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    parser: "typescript-eslint-parser",
    project: [
      "./web/site/tsconfig.json",
      "./nest/back/tsconfig.json"
    ]
  },
  plugins: ["react", "@typescript-eslint"],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "comma-dangle": [2, "never"],
    "@typescript-eslint/comma-dangle": [2, "never"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"]
  }
};
