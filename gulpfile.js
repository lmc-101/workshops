var gulp = require('gulp');

gulp.task('pranie', function() {
    console.log('costam');
});


var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('dev', function() {
    return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
});

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() { 
    return gulp.src('scss/**/*.scss')
        .pipe(sourcemaps.init()) 
        .pipe(sass({errLogToConsole: true, outputStyle:'expanded'})) 
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css')) })



gulp.task('watch', function() {
    gulp.watch('scss/*scss', ['sass']);
});

gulp.task('task-name', function() {
    return gulp.src('js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
});



//run everything

gulp.task('default', ['dev', 'sass', 'watch']);