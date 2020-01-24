// Business at the top

function checkTwo(number){
	if (number.includes(2)){
		output = "boop";
		return output;
	}
	else {
		output = checkOne(number);
		return output;
	}
}

function checkOne(number){
	if (number.includes(1)){
		output = "beep";
		return output;
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
			var output = checkTwo(input);
			console.log("output: " + output);
		}
	});
});