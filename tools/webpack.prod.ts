import baseConfig, { mode } from './webpack.base'
import { merge } from 'webpack-merge'
import webpack from 'webpack'
import TerserPlugin from 'terser-webpack-plugin'

const injectList = {
    /* eslint-disable @typescript-eslint/naming-convention */
    NODE_ENV: `"${mode}"`,
    API_ENDPOINT: '"https://another.api.com/production/"',
    /* eslint-enable @typescript-eslint/naming-convention */
}

export default merge(baseConfig, {
    optimization: {
        minimizer: [new TerserPlugin({})],
    },
    devtool: false,
    plugins: [
        new webpack.DefinePlugin({
            'process.env': injectList,
        }),
    ],
})
