import gulp from 'gulp';
import paths from '../config/config.js';

export default function images() {
    return gulp.src(paths.catch.images)
        .pipe(gulp.dest(paths.build.images))
}