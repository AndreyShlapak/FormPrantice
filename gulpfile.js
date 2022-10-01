import gulp from 'gulp';

import { watcher, reset, htmlCopy, server, scss, js, img } from "./gulp/tasks/functions.js";

const mainTasks = gulp.parallel(htmlCopy, scss, js, img);
const secondTasks = gulp.parallel(watcher, server);

const dev = gulp.series(reset, mainTasks, secondTasks);



gulp.task('default', dev);