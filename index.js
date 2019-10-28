$(document).ready(function() {
    $('#navhamburger').click(function() {
        $('.hamburger-span').toggleClass('active');
        $('#navlist').toggleClass('active');
    });
});