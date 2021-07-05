$(function(){
    "use strict"
    
    /*//adjust slider height

var winH = $(window).height(),
     upperH = $('.upper-bar').innerHeight(),
     navH = $('.navbar').innerHeight();
  
     $('.slider .carousel-item').height(winH - (upperH + navH) );

*/



//featured-work  shuflle
$('.featured-work ul li').on('click',function(){
$(this).addClass("active").siblings().removeClass('active');

 if($(this).data('class') === 'all'){

    $('.shufle-imge .col-md').css('opacity', 1);
 }
    else {
        $('.shufle-imge .col-md').css('opacity', .08);
        $($(this).data('class')).parent().css('opacity', '1');

     }
 

});

//trigger nice croll
$('html').niceScroll({

   cursorcolor: '#ec1c23' ,
   cursorwidth: '13px',
   corsorborder: '1px solid #d31336',
   corsorborderradius:0,
   zindex:99999

});
// scroll to top

$('#scroll-to-top').click(function(){
   $("html,body").animate({scrollTop: 0},1000)
});

});




