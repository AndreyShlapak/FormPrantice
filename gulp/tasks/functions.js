import gulp from 'gulp';
import { deleteAsync } from 'del';
import fileInclude from 'gulp-file-include';
import browserSync from "browser-sync";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import webpack from 'webpack-stream';

import { path } from '../config/path.js';

const sass = gulpSass(dartSass);


const htmlCopy = () => {
    return gulp
        .src(path.src.html)
        .pipe(fileInclude())
        .pipe(gulp.dest(path.build.html))
        .pipe(browserSync.stream())
}

const watcher = () => {
    gulp.watch(path.watch.html, htmlCopy);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
}

const reset = () => {
  return deleteAsync(path.build.html)
}

const server = () => {
    browserSync.init({
        server: {
            baseDir: `${path.build.html}`
        },
        notify: false,
        port: 3000
    });
}

const scss = () => {
    return gulp
        .src(path.src.scss, { sourcemaps: true })
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest(path.build.scss))
        .pipe(browserSync.stream())
}

const js = () => {
    return gulp
        .src(path.src.js)
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'app.js'
            }
        }))
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.stream())
}

const img = () => {
    return gulp
        .src(path.src.img)
        .pipe(gulp.dest(path.build.img));
}

export {
    watcher,
    reset,
    htmlCopy,
    server,
    scss,
    js,
    img
}