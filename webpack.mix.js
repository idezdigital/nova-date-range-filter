let mix = require('laravel-mix');

require('./mix');

mix.setPublicPath('dist')
    .js('resources/js/filter.js', 'js')
    .vue({ version: 3 })
    .css('resources/css/filter.css', 'css')
    .nova('idez/nova-date-range-filter');
