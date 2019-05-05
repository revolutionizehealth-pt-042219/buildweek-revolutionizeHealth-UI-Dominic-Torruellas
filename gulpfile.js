const postcss = require('gulp-postcss');
const less = require('gulp-less');
const gulp = require('gulp');
const rename = require('gulp-rename');
const precss = require('precss');
const rucksack = require('rucksack-css');

const srcPath = './src/app/**/*.less';
const watchPath = ['./src/app/**/*.less', './src/Less/**/*.less'];

gulp.task('css', () => {
  const processors = [precss({}), rucksack({})];
  return gulp
    .src(srcPath)
    .pipe(less())
    .pipe(postcss(processors))
    .pipe(rename({ extname: '.css' }))
    .pipe(gulp.dest('./src/app'));
});

gulp.task('build', gulp.series(['css']));

gulp.task(
  'watch:css',
  gulp.series(['css'], () => {
    gulp.watch(watchPath, gulp.series(['css']));
  })
);

gulp.task('default', gulp.parallel(['watch:css']));
