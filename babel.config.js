module.exports = {
    presets: ['@babel/preset-env'],
    plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-transform-class-properties',
        [
            '@babel/plugin-syntax-import-attributes',
            {
                deprecatedAssertSyntax: true
            }
        ]
    ]
}
