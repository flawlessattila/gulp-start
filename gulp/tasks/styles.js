import gulp from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import sourceMap from 'gulp-sourcemaps';
import paths from '../config/config.js';

const sass = gulpSass(dartSass);

export default function styles() {
    return gulp.src(paths.catch.styles)
        .pipe(sourceMap.init())
        .pipe(sass())
        .pipe(sourceMap.write())
        .pipe(gulp.dest(paths.build.styles))
}