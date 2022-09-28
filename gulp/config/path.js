import * as nodePath from 'path';

const buildFolder = './dist';
const srcFolder = './src';

const rootFolder = nodePath.basename(nodePath.resolve());

export const path = {
    src: {
        js: `${srcFolder}/js/app.js`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
    },
    build: {
        js: `${buildFolder}/js/`,
        html: `${buildFolder}/`,
        scss: `${buildFolder}/css`
    },
    watch: {
        js: `${srcFolder}/**/*.js`,
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/**/*.scss`
    },
    buildFolder,
    srcFolder,
    rootFolder
}

