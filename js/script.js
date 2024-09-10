$(document).ready(function () {
    $('.navbar-toggler').click(function () {
        if ($('.header .bg-shadow').css('display') == 'none') {
            $('.navbar,.navbar .navbar-collapse , .header .bg-shadow ').css('position', 'fixed');
            $('.header .bg-shadow').css('display', 'block');
            $('.header .bg-shadow').animate({ height: '100%' });
        } else {
            $('.header .bg-shadow').animate({ height: '0%' }, function () {
                $('.header .bg-shadow').css('display', 'none');
                $('.navbar,.navbar .navbar-collapse , .header .bg-shadow ').css('position', 'relative');
            });
        }
    });
});