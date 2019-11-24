
$("#subscribe").click(function(){
  if (this.checked){
		$("#emailField").css("display", "block")
	} else{
			console.log("Not selected");
			$("#emailField").css("display", "none")
		}
	});
