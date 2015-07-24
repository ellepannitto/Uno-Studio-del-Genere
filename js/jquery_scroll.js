/*scroll*/
$(document).ready(function(){

	$('.scroll').on("click", function(event)
	{
		event.preventDefault();
         //calculate destination place
         var dest=$(this.hash).position().top;
        
         //go to destination
         $('html,body').animate({scrollTop:dest}, 1000,'swing');

	});
	
	$('#menuButton').click(function()
	{
		   $('.menu').animate({"left":"0px"}, 1000);
		   $("#menuButton").hide();
	});
		   
	$('.closeButton').click(function()
	{
		$('.menu').animate({"left":"-200px"}, 1000);
		$("#menuButton").show();
	});
	
	
	var dentro=false;
	$("#loc_geografica").on("click",function(event)
	{
		event.stopPropagation();
		})
	
	$('.ricerca2').on("click",function(event)
	{
		event.stopPropagation();
		if(!dentro){
			$('.ricerca2').animate({"left":"0"}, 1000, "swing");
			
		}
		else
		{
			$('.ricerca2').animate({"left":"50%"}, 1000, "swing");
		}	
		dentro=!dentro;
	});
	
});
