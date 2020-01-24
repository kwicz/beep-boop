// Business at the top

function checkOne(number){
	if (number.includes(1)){
		output = "beep";
		return output
	}
	else {
		output = extract(number);
		return output;
	}
}


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
			var output = checkOne(input);
			console.log("output: " + output);
		}
	});
});