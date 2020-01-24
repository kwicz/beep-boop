// Business at the top

// Check user input for "3"
function checkThree(number){
	if (number.includes(3)){
		output = "I'm sorry, Dave, I can't do that.";
		return output;
	}
	else {
		output = checkTwo(number);
		return output;
	}
}

// Check user input for "2"
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

// Check user input for "1"
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

// Output range of number from 0 until the user's input
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
			var output = checkThree(input);
			console.log("output: " + output);
		}
	});
});