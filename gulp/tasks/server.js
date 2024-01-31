import gulp from 'gulp';
import liveServer from 'gulp-server-livereload';
import { serverOptions } from "../config/config.js";
import paths from '../config/config.js';

export default function server() {
    return gulp.src(paths.buildFolder)
        .pipe(liveServer(serverOptions));
}
