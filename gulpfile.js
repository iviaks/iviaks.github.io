var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');

gulp.task('sass', function() {
  return gulp
    .src(path.resolve(__dirname, 'assets', 'scss', 'main.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.resolve(__dirname, 'dist', 'css')));
});

gulp.task('watcher', function() {
  gulp.watch(path.resolve(__dirname, 'assets', 'scss', '**'), [ 'sass' ]);
});

gulp.task('build', [ 'sass' ]);
gulp.task('watch', [ 'sass', 'watcher' ]);

gulp.task('default', [ 'sass', 'watcher' ]);
