/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.scss');

require('./slick');
require ('./carousel');

require('./google-map');


// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
var $ = require('jquery');

require('bootstrap');

$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

