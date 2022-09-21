$('.coin_return').mouseover
(function(){
                $('body').toggleClass('nav-drop');
                $('.btn').addClass('btn-45deg').removeClass('btnmove');
    
            });

$('.btn').click(function(){
    alert('누름');
});

$('.btn').mouseleave(function(){
                $('.btn').removeClass('btn-45deg');
            });
