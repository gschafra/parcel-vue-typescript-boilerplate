"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var path = __importStar(require("path"));
var conf = {
    extractCSS: process.env.NODE_ENV === 'production',
    publicPath: process.env.BASE_URL || "/",
    chainWebpack: function (config) {
        config.resolve
            .alias
            .set('@public', path.resolve(__dirname, 'src/module/public/'));
    },
    devServer: {
        proxy: {
            '^/api': {
                target: "http://localhost:8072",
                pathRewrite: { '^/api': '' }
            }
        }
    },
    configureWebpack: {
        devtool: 'source-map'
    },
    productionSourceMap: false
};
module.exports = conf;
