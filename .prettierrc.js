module.exports = {
    printWidth: 120,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: true,
    quoteProps: 'as-needed',
    trailingComma: 'all',
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: 'always',
    endOfLine: 'auto',
    plugins: [require('@trivago/prettier-plugin-sort-imports')],
    importOrder: ['^(next/(.*)$)|^(next$)', '^(react/(.*)$)|^(react$)', '<THIRD_PARTY_MODULES>', '^@(.*)', '^[./]'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true
}