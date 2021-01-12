// webpack.mix.js

let mix = require('laravel-mix');

mix
.js('src/app.js', 'dist')
.sass('src/app.scss', 'dist')
.options({
    autoprefixer: {
        options: {
            grid: true,
        }
    },
    processCssUrls: false
});
// .setPublicPath('dist');