const typescript = require('@rollup/plugin-typescript')
const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const json = require('@rollup/plugin-json')


module.exports = {
    input: "src/main.ts",
    output: [
        {
            dir: 'dist',
            format: 'cjs',
            preserveModules: true,
        }
    ],
    plugins: [
        typescript(),
        resolve({
            preferBuiltins: true,
        }),
        commonjs(),
        json(),
    ],
    external: [
        'koa',
        '@koa/router',
    ]
}