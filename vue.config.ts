import { ProjectOptions } from "@vue/cli-service"
import * as path from 'path'

const conf: ProjectOptions = {
    publicPath: process.env.BASE_URL || "/",
    chainWebpack: config => {
        config.resolve
        .alias
        .set('@public', path.resolve(__dirname, 'src/module/public/'));
    },
    devServer: {
        proxy: {
            '^/api': {
                target: "http://localhost:8072",
                pathRewrite: {'^/api' : ''}
            }
        }
    },
    configureWebpack: {
        devtool: 'source-map',
    },
    productionSourceMap: false
}

module.exports = conf
