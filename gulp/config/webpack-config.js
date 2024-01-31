import {sync} from 'glob';
import paths from './config.js';
import isProduction from './build-mode.js';

const webpackConfig = {
    mode: 'production',
    entry: sync(paths.catch.scripts).reduce((acc, path) => {
        const entry = path.replace(/^.*[\\\/]/, '').replace('.js','');
        acc[entry] = path;
        return acc;
      }, {}),
    output: {
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            { test: /\.svg$/, use: 'svg-inline-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
        ]
    }
}

if (!isProduction) {
    webpackConfig.devtool = 'inline-source-map';
    webpackConfig.mode = 'development';
}

export default webpackConfig;