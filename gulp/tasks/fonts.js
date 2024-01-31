import gulp from 'gulp';
import ttf2woff2 from 'gulp-ttf2woff2';
import paths from '../config/config.js';

export default function fonts() {
    return gulp.src(paths.catch.fonts)
        .pipe(ttf2woff2())
        .pipe(gulp.dest(paths.build.fonts))
}
