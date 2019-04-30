const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js('src/index.js', 'dist/proton.js')
    .sass('src/sass/proton.scss', 'dist/proton.css')
    .sass('src/sass/_preflight.scss', 'dist/proton-preflight.css')
    .sass('src/sass/_components.scss', 'dist/proton-components.css')
    .sass('src/sass/_utilities.scss', 'dist/proton-utilities.css')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.js') ],
    })

mix.js('docs/index.js', 'dist/docs.js')
    .sass('docs/sass/docs.scss', 'dist/docs.css')
    .webpackConfig({
        resolve: {
            alias: {
                '@': __dirname + '/docs',
            },
        },
    })
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.js') ],
    })