$(function(){
	$('.a').click(function(){
    	$('html,body').animate({scrollTop:$('.top2').offset().top});
    	return false;
    })
   
    $('.b').click(function(){
    	$('html,body').animate({scrollTop:$('.top3').offset().top});
    	return false;
    })

    $('.c').click(function(){
    	$('html,body').animate({scrollTop:$('.top4').offset().top});
    	return false;
    })

 	var docao=$(window).height()
 	$('.top1').css({'height':docao})
 	
 	$(window).resize(function(){
 		console.log(docao)
 	$('.top1').css({'height':docao})

 	});



 	$('.nutmenu').click(function(){
 		$('.menuphai').addClass('ra');
 		return false;

 	})
 	$('.tat').click(function(){
 		$('.menuphai').removeClass('ra');
 		return false;

 	})
	 
})   