/** @type {import("prettier").Config} */
const config = {
  trailingComma: "es5",
  endOfLine: "lf",
  tabWidth: 4,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  arrowParens: "always",
  plugins: ["prettier-plugin-tailwindcss"],
};
export default config;
