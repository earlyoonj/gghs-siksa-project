$('.tree_container').mouseover(function(){
                $('.tree_container').addClass('sizeup').removeClass('sizedown');
                $('.righttree').addClass('moveright').removeClass('goback');
            });
            
            
$('.tree_container').mouseleave(function(){
             $('.tree_container').removeClass('sizeup').addClass('sizedown');
                
    $('.righttree').addClass('goback');

    
    
            });


