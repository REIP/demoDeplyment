var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('compress', function (cb) {
  pump([
        gulp.src('lib/*.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});

// Task for minify files generated by Angular
/* gulp.task('minifyBundles', function () {
  gulp.src(['./dist/Angular-Lazy-Loading/polyfills.bundle.js', 
  './dist/Angular-Lazy-Loading/main.bundle.js', 
  './dist/Angular-Lazy-Loading/styles.bundle.js', 
  './dist/Angular-Lazy-Loading/scripts.bundle.js', 
  './dist/Angular-Lazy-Loading/vendor.bundle.js',
  './dist/Angular-Lazy-Loading/runtime.bundle.js',
  './dist/Angular-Lazy-Loading/*.chunk.js'
    ])
    .pipe(uglify())
    .pipe(gulp.dest('./dist/Angular-Lazy-Loading'));
});
gulp.task('default', ['minifyBundles'], function () {}); */
