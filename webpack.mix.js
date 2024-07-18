const mix = require('laravel-mix');


mix.js('resources/js/app.js', 'public/js')
    .vue()
    //.sass('resources/sass/app.scss', 'public/css')
    .options({
        postCss: [require('autoprefixer'), require('postcss-rtl')],
    })
    .styles([
        'public/css/grid.min.css',
        'public/css/main.css',
    ],'public/css/all.css')