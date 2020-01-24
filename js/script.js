// Business at the top
function extract(number){
	var range = [];
	for (var i = 0; i < number; i++){
		range.push(i);
	}
	console.log("range: " + range);
	return range;
};


// UI at the bottom
$(document).ready(function(){
	$("form").submit(function(event){
		var input = $("input").val();
		if (!input){
			return alert("Please submit a number.");
		}
		else {
			var output = extract(input);
			console.log("output: " + output);
		}
	});
});