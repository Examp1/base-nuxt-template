import gulpSvgSprite from "gulp-svg-sprite";
export const svgSprite = async () => {
  // Конвертация в WebP
  app.gulp
    .src('./assets/img/raw-sprite-icon/*.svg', {})
    .pipe(
        gulpSvgSprite({
        mode: {
          stack: {
            sprite: `./sprite.svg`,
            example: true,
          },
        },
      })
    )
    .pipe(app.gulp.dest('./assets/img/'));
};
