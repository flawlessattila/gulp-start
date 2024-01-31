import gulp from 'gulp';

import html from './tasks/html.js';
import clean from './tasks/clean.js';
import styles from './tasks/styles.js';
import fonts from './tasks/fonts.js';
import scripts from './tasks/scripts.js';
import images from './tasks/images.js';
import server from './tasks/server.js';

import paths from './config/config.js';


const build = gulp.series(clean, gulp.parallel(html, styles, scripts, images, fonts));

function watch() {
    gulp.watch(paths.watch.styles, gulp.parallel(styles));
    gulp.watch(paths.watch.html, gulp.parallel(html));
    gulp.watch(paths.watch.scripts, gulp.parallel(scripts));
    gulp.watch(paths.watch.images, gulp.parallel(images));
    gulp.watch(paths.watch.fonts, gulp.parallel(fonts));
}

const development = gulp.series(build, gulp.parallel(server, watch));

export {build};
export {watch};
export default development;