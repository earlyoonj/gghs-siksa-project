$('.bascontainer').mouseover(function(){
    $('.open').addClass('out-active').removeClass('openbas');
    $('.agroup').toggleClass('out');
});

$('.bascontainer').mouseleave(function(){
    $('.open').removeClass('out-active');
});