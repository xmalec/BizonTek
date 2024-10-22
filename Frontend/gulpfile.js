const gulp = require('gulp');
const shell = require('gulp-shell');
const fs = require('fs-extra');

const outputDir = './out';
const destinationDir = '../Backend/src/wwwroot';

// Task to run Next.js build
gulp.task('build', shell.task('npm run build'));

// Task to copy the build output
gulp.task('copy', () => {
  return fs.copy(outputDir, destinationDir)
    .then(() => console.log('Files copied successfully.'))
    .catch(err => console.error(`Error copying files: ${err}`));
});

// Default task: run build and then copy
gulp.task('default', gulp.series('build', 'copy'));
