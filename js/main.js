$(function(){
    'use strict';
    // slider adjustment
    var x = $('.upper-bar').innerHeight(),
        y = $('.navbar').innerHeight(),
        z = $(window).height();
    $('.slider, .carousel-item').height(z - (x + y));
});