


$('.cover').mouseover(function(){
    if(!$(this).hasClass('active')){
    $(this).addClass('half-open').removeClass('close');}
            });
            
            
$('.cover').mouseleave(function(){
    if(!$(this).hasClass('active'))            
    $(this).removeClass('half-open').addClass('close');
            });

            
            $('.testimonials li ').click(function() {
                
                if($(this).find('.cover').hasClass('active')){
                    $(this).find('.cover').toggleClass('active').addClass('close');     
/*                    alert('클릭해준 버블이 클라스 있어요!');*/
                    
                } else {
                    
                
                    if ($('.testimonials li ').find('.cover').hasClass('active')) {
                    
                    $('.testimonials li ').find('.cover').removeClass('active').addClass('close');
                    $(this).find('.cover').removeClass('close').toggleClass('active');
               /*         alert('버블이 중 하나가 클라스 가지고 있어요!!');
                 */ 
                    } else {
                    
                        $(this).find('.cover').removeClass('close').toggleClass('active');     
                   /* alert('버블이 클라스 없어요!');
                    */
                        
                    }
                
    
                }

            
                
                
});
            
            



            
            $('.btn-gong').click(function() {
                if ($('body').is('.sb, .ju, .rot, .br, .coo')) {
                $('body').removeAttr('class').toggleClass('gong');
                
            } else {
                $('body').toggleClass('gong');
            }
})
            
            $('.btn-sb').click(function() {
                if ($('body').is('.gong, .ju, .rot, .br, .coo')) {
                $('body').removeAttr('class').toggleClass('sb');
            } else {
                $('body').toggleClass('sb');
            }
})
            
            $('.btn-ju').click(function() {
                if ($('body').is('.gong, .sb, .rot, .br, .coo')) {
                $('body').removeAttr('class').toggleClass('ju');
            } else {
                $('body').toggleClass('ju');
            }
})
            
            $('.btn-rot').click(function() {
                if ($('body').is('.gong, .ju, .sb, .br, .coo')) {
                $('body').removeAttr('class').toggleClass('rot');
            } else {
                $('body').toggleClass('rot');
            }
})
            
            $('.btn-br').click(function() {
                if ($('body').is('.gong, .ju, .rot, .sb, .coo')) {
                $('body').removeAttr('class').toggleClass('br');
            } else {
                $('body').toggleClass('br');
            }
})
            
            $('.btn-coo').click(function() {
                if ($('body').is('.gong, .ju, .rot, .br, .sb')) {
                $('body').removeAttr('class').toggleClass('coo');
            } else {
                $('body').toggleClass('coo');
            }
                
})          
