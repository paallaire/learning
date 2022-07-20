const mix = require('laravel-mix');

require('dotenv').config();
require('laravel-mix-twig');

const srcPath = 'assets';
const publicPath = 'dist';

mix.setPublicPath(publicPath)
  .js(`${srcPath}/scripts/main.js`, 'scripts')
  .sourceMaps()
  .sass(`${srcPath}/styles/main.scss`, 'styles')
  // .copyDirectory(`${srcPath}/images`, `${publicPath}/images`)
  .options({
    processCssUrls: false,
  })
  .twig({
    enabled: !mix.inProduction(), // Enabled in development mode only
    root: './templates', // Change default root path
    entries: ['index.twig', 'pages/*.twig'], // Custom entries
    output: './', // Generate output HTML to this path
    data: '**/*.y?(a|)ml', // Search all `*.yml` and/or `*.yaml` files in root directory
    dataExtend: {
        ENV_IS_PRODUCTION: mix.inProduction(), // Add the environment variable
    },
    flatten: true, // Don't preserve the output directory structure
    loader: { // Custom `twig-html-loader` options
        data: {}, // * Gets automatically generated object from files of `data` option
    },
    html: { // Custom `html-webpack-plugin` options
        filename: {String}, // * Will be overwritten for each `entries`
        template: {String}, // * Depends on each path of the template from the root and its name
    },
    beautify: { // Custom `js-beautify` options
        'end_with_newline': true,
        'indent_inner_html': true,
        'preserve_newlines': false,
    },
  })
  .disableSuccessNotifications()
  .extract()
  .version();

if (!mix.inProduction()) {
  mix
    .sourceMaps()
    .browserSync({
    // proxy: process.env.BASE_URL,
    server: {
      baseDir: 'dist',
    },
    ghostMode: {
      clicks: false,
      scroll: true,
      forms: {
        submit: false,
        inputs: false,
        toggles: false,
      },
    },
    files: [
      'templates/**/*.twig',
      'dist/**/*.html',
      'assets/**/*.{js,vue,css}',
    ],
  });
}
