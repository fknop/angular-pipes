'use strict';

const gulp = require('gulp');
const clean = require('gulp-clean');

gulp.task('clean', function () {
   
   return gulp.src('pipes').pipe(clean()); 
});