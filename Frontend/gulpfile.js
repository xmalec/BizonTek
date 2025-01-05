const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const shell = require('gulp-shell');
const fs = require('fs-extra');
const fs2 = require('fs');
const { generateSitemap } = require('./src/metadata/generate-sitemap');
const { generateManifest } = require('./src/metadata/generate-manifest');

const outputDir = './out';
const publicDir = './public';
const destinationDir = '../Backend/src/wwwroot';

gulp.task('createVersion', (done) => {
  const version = { version: Date.now() };
  fs2.writeFileSync(`${publicDir}/version.json`, JSON.stringify(version, null, 2));
  done();
});

// Sitemap generation task
gulp.task('generateMetadata', (done) => {
  const sitemapOutputPath = `${publicDir}/sitemap.xml`;
  generateSitemap(sitemapOutputPath);
  const manifestOutputPath = `${publicDir}/manifest.json`;
  generateManifest(manifestOutputPath);
  done();
});

// Task to run Next.js build
gulp.task('build', gulp.series(shell.task('npm run build')));


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
    ;
});

//-----------------

// Task to copy the build output
gulp.task('copy', () => {
  return fs.copy(outputDir, destinationDir)
    .then(() => console.log('Files copied successfully.'))
    .catch(err => console.error(`Error copying files: ${err}`));
});



// Default task: run build and then copy
gulp.task('default', gulp.series('createVersion', 'generateMetadata', 'svgSprite', 'build', 'copy'));
