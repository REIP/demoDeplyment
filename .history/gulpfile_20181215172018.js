var gulp = require('gulp');
var uglify = require('gulp-uglify');

// Task for minify files generated by Angular
/* gulp.task('minifyBundles', function () {
  gulp.src(['./dist/Angular-Lazy-Loading/polyfills.bundle.js', 
  './dist/Angular-Lazy-Loading/main.bundle.js', 
  './dist/Angular-Lazy-Loading/styles.bundle.js', 
  './dist/Angular-Lazy-Loading/scripts.bundle.js', 
  './dist/Angular-Lazy-Loading/vendor.bundle.js',
  './dist/Angular-Lazy-Loading/runtime.bundle.js',
  './dist/Angular-Lazy-Loading/*.chunk.js'])
    .pipe(uglify())
    .pipe(gulp.dest('./dist/Angular-Lazy-Loading'));
}); 
gulp.task('default', ['minifyBundles'], function () {}); */

v// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('dist/**/*');
});
/* var gulp = require('gulp');
var print = require('gulp-print');

gulp.task('message', function() {
  return gulp.src('package.json')
    .pipe(print(function() { return 'HTTP Server Started'; }));
}); */