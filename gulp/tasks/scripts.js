import gulp from 'gulp';
import webpack from 'webpack-stream';
import webpackConfig from '../config/webpack-config.js';
import paths from '../config/config.js';


export default function scripts() {
    return gulp.src(paths.catch.scripts)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(paths.build.scripts))
}