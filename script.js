$(document).ready(

    function(){
     	$("span").each(function (index, value) {
     		if(index % 2 === 0) {
     			$(this).css("color", "red");
     		}
     	});   

	$("p").each(function (index, value) {
		$(this).append('<button class="btn" data-tmp="' + index + '">Click me ' + index + '!</button>');
	});
	
	$(".btn").click(function() {
		alert($(this).attr("data-tmp"));
	});
       	
});


