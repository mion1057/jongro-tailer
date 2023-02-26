$(function() {   
    //       ，               
    $(".main > a").click(function() {   
        var ulNode = $(this).next("ul");   
        ulNode.slideToggle("slow");   
    });   
  
    //       ，          ，        
    $(".hmain").hover(function() {  
		var ulNode = $(this).children("ul")
		timeoutid = setTimeout(function(){
			ulNode.slideDown("slow");  
		},300);
		}, function() { 
			 $(this).children("ul").slideUp("slow");  
			clearTimeout(timeoutid);          
    });   
});