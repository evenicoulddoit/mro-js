const babel = require('gulp-babel'),
      shell = require('gulp-shell'),
      sourcemaps = require('gulp-sourcemaps'),
      gulp = require('gulp');

const SRC_FILE = 'src/mro.js';


gulp.task('compile-js', () => {
  gulp.src(SRC_FILE)
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});


gulp.task('test', shell.task(['node spec/index.js'], {ignoreErrors: true}));


gulp.task('default', ['compile-js', 'test'], () => {
  gulp.watch(SRC_FILE, ['compile-js', 'test']);
  gulp.watch('spec/**/*.js', ['test']);
});
