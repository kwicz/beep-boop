// Business at the top



// UI at the bottom
$(document).ready(function(){
	$("form").submit(function(event){
		var input = $("input").val();
		if (!input){
			return alert("Please submit a number.");
		}
		else {
			console.log("input: " + input);
		}
	});
});