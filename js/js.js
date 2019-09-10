$(document).ready(function(){
    //accardeon
    $('.js-accardeon:first').children('p').show();
    $('.js-accardeon').on('click', function() {
        $(this).toggleClass('active').children('p').slideToggle().parent('div').parent('li').siblings('li').children('div').removeClass('active').children('p').slideUp();
    });  

    //button
    $(window).scroll(function() { 
        if($(this).scrollTop() != 0) { 
            $('.js-button-toTop').fadeIn();
        } else {
            $('.js-button-toTop').fadeOut(); 
        } 
    }); 

    $('.js-button-toTop').click(function() { 
        $('body,html').animate({scrollTop:0},800); 
    });


    // $('.sliderTestimonials').slick({
    //     autoplaySpeed: 2000,
    // });

});