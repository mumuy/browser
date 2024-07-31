module.exports = {
    presets: [
        ['@babel/preset-env',{
            "targets" : {
                "chrome" : "88"
            }
        }]
    ],
    plugins: [
        '@babel/plugin-transform-runtime'
    ]
}