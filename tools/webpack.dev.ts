import baseConfig, { mode } from './webpack.base'
import { merge } from 'webpack-merge'
import webpack from 'webpack'

const injectList = {
    /* eslint-disable @typescript-eslint/naming-convention */
    NODE_ENV: `"${mode}"`,
    API_ENDPOINT: '"http://127.0.0.1:8083/api"',
    /* eslint-enable @typescript-eslint/naming-convention */
}

export default merge(baseConfig, {
    entry: {
        main: [
            './src/index.dev.ts', './src/index.ts',
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': injectList,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
})
