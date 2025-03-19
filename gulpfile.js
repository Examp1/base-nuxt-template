import gulp from "gulp";
import { svgSprite } from "./gulp/tusk/svg-sprite.js";
global.app = {
    gulp: gulp,
};

gulp.task("svgSprite", svgSprite);
