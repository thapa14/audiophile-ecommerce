// prettier.config.js
export default {
    useTabs: false,      // use spaces, not tabs
    tabWidth: 4,         // 4 spaces indentation
    semi: true,          // add semicolons
    singleQuote: true,   // use single quotes
    printWidth: 100,     // max line length
    trailingComma: 'es5',// trailing commas where valid in ES5
    arrowParens: 'avoid',
    endOfLine: 'lf',
    plugins: ['prettier-plugin-tailwindcss'],
};
