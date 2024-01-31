import gulp from 'gulp';
import fileinclude from 'gulp-file-include';
import formatHtml from 'gulp-format-html';
import paths from '../config/config.js';


export default function html() {
    return gulp.src(paths.catch.html)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(formatHtml())
        .pipe(gulp.dest(paths.build.html));
}
