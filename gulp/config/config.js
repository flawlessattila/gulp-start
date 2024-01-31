import isProduction from './build-mode.js';

const buildFolder = isProduction ? '../app' : '../build';
const srcFolder = '../src';

const serverOptions = {
  livereload: true,
  open: true
};

const paths = {
  build: {
    html: `${buildFolder}/`,
    scripts: `${buildFolder}/scripts/`,
    styles: `${buildFolder}/styles/`,
    images: `${buildFolder}/static/images/`,
    fonts: `${buildFolder}/static/fonts/`
  },
  catch: {
    html: `${srcFolder}/*.html`,
    scripts: `${srcFolder}/scripts/*.js`,
    styles: `${srcFolder}/styles/*.scss`,
    images: `${srcFolder}/static/images/*`,
    fonts: `${srcFolder}/static/fonts/*.ttf`
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    scripts: `${srcFolder}/scripts/**/*.js`,
    styles: `${srcFolder}/styles/**/*.scss`,
    images: `${srcFolder}/**/*.{jpg,jpeg,png,svg,gif,webp,ico}`,
    fonts: `${srcFolder}/static/fonts/*.ttf`,
  },
  buildFolder,
  srcFolder,
//   projectDirName: path.basename(path.resolve()),
};


export {serverOptions};
export default paths;