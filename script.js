$(document).ready(
    function(){
     	$("span").each(function (index, value) {
     		if(index % 2 === 0) {
     			$(this).css("color", "red");
     		}
     	});
     	//	$("span:even").css('color', 'red');

     });
       	
//var button = $('<button class="btn" data-tmp="">Click me</button>');
//$("p").append(button);

$("p").each(function (index, value) {
	$(this).append('<button class="btn" data-tmp="' + index + '">Click me ' + index + '!</button>');
});
$(".btn").click(function() {
	alert($(this).attr("data-tmp"));
});
