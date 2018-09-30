const gulp = require('gulp');
const del = require('del');
const runSequence = require('run-sequence');
const shelljs = require('shelljs');

const clean = () => del(['./build']);

gulp.task('clean', clean);

gulp.task('build', done => {
  shelljs.exec('cross-env NODE_ENV=production nuxt build && backpack build', function (code, stdout, stderr) {
    if (code !== 0) {
      console.log('Program stderr:', stderr);
      done(stderr);
      return;
    }
    done();
  });
});

gulp.task('default', function (callback) {
  runSequence(
    'clean',
    'build',
    callback);
});