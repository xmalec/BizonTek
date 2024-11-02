const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const shell = require('gulp-shell');
const fs = require('fs-extra');
const fs2 = require('fs');

const outputDir = './out';
const publicDir = './public';
const destinationDir = '../Backend/src/wwwroot';

// Task to run Next.js build
gulp.task('build', shell.task('npm run build'));

//-----------------

// SVG sprite configuration
const config = {
  mode: {
    symbol: { // Create a symbol sprite
      sprite: "../icons.svg" // Output filename
    }
  }
};

// Task to create SVG sprite
gulp.task('svgSprite', function () {
  return gulp.src('src/icons/*.svg') // Source folder
    .pipe(svgSprite(config))
    .pipe(gulp.dest(`${outputDir}/img/icons`))
    .pipe(gulp.dest(`${publicDir}/img/icons`))
    .on('end', () => {
      // Generate version based on current timestamp
      const version = { version: Date.now() };
      fs2.writeFileSync(`${outputDir}/img/icons/version.json`, JSON.stringify(version, null, 2));
    });
});

//-----------------

// Task to copy the build output
gulp.task('copy', () => {
  return fs.copy(outputDir, destinationDir)
    .then(() => console.log('Files copied successfully.'))
    .catch(err => console.error(`Error copying files: ${err}`));
});



// Default task: run build and then copy
gulp.task('default', gulp.series('build', 'svgSprite', 'copy'));
