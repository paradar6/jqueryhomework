console.log("here");
var imgs = $("img");
console.log(imgs);
var msg = "Hover over an image below.";
var i=0;
var i=i+1;


$.each(imgs, function(i){
	if (i<imgs.length){
		$(imgs[i]).hover(function(){
			$('#image').css("background-image","url('"+imgs[i].src+"')");
			$('#image').text(imgs[i].alt);
		})
			$(imgs[i]).focus( function() {
			 $('#image').css("background-image", "url('"+imgs[i].src+"')");
			 $('#image').text(imgs[i].alt);
		 })
		  $(imgs[i]).mouseleave( function() {
		 	$('#image').css("background-image", "url('')");
		 $('#image').text(msg);
	 })
	 $(imgs[i]).blur( function(){
		$('#image').css("background-image", "url('')");
		$('#image').text(msg);

	})
}})
