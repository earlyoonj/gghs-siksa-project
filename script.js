        


    $('.swipe').click(function() {
                if ($('.swipe').hasClass('on')) {
                $('.swipe').removeClass('on').addClass('off');
            } else {
                $('.swipe').removeClass('off').addClass('on');
            }
});

            
$(document).ready(function() { 
    // alert("크롬으로 접속해주세요/pc화면에 최적화되어있습니다");

	(function ($) { 
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		
		$('.tab ul.tabs li a').click(function (g) { 
			var tab = $(this).closest('.tab'), 
				index = $(this).closest('li').index();
			
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			
			g.preventDefault();
		});

	})(jQuery);

	
	// $('#intro').play();
	// $('#bgm').play();
});
            
        
            
           
            