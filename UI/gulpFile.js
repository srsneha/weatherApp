var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    browserify('./src/js/app.js')
    .transform('reactify')
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('copy', function() {
    gulp.src('./src/*.html')
        .pipe(gulp.dest('dist'));
    gulp.src('./src/css/*.*')
        .pipe(gulp.dest('dist/css'));
    gulp.src('./src/images/*.*')
        .pipe(gulp.dest('dist/images'));
    gulp.src('./src/vendor/*.*')
        .pipe(gulp.dest('dist/vendor'));
});

gulp.task('default',['browserify','copy'], function() {
    return gulp.watch('src/**/*.*',['browserify','copy']);
})
