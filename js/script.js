// Business at the top

// Check user input for "3"
function checkThree(number){
	if (number.includes(3)){
		var name = $("#inputName").val();
		output = "I'm sorry " + name + ", I'm afraid can't do that";
		return output;
	} else {
		output = checkTwo(number);
		return output;
	};
};

// Check user input for "2"
function checkTwo(number){
	if (number.includes(2)){
		output = "beep";
		return output;
	} else {
		output = checkOne(number);
		return output;
	};
};

// Check user input for "1"
function checkOne(number){
	if (number.includes(1)){
		output = "boop";
		return output;
	} else {
		output = number;
		return output;
	};
};

// Output range of number from 0 until the user's input
function extract(number){
	var range = [];
	for (var i = 0; i <= number; i++){
		var i = i.toString();
		var item = checkThree(i);
		range.push(item);
	};
	return range;
};

// Animate Hal
function shakeIt() {
  var div = $("#shake");
  var interval = 100;
  var distance = 10;
  var times = 4;

  $(div).css('position', 'relative');

  // Shake no, if Hal is afraid he can't do that
  	for (var iter = 0; iter < (times + 1) ; iter++) {
      $(div).animate({
          left: ((iter % 2 == 0 ? distance : distance * -1))
      }, interval);
  }                                                                                                          
  $(div).animate({ left: 0 }, interval);
  
};

// UI at the bottom
$(document).ready(function() {
	$("form").submit(function(event) {
		event.preventDefault();
		var input = $("#inputNumber").val();
		var name = $("#inputName").val();
		if (!input) {
			return alert("Please submit a number.");
		} else {
			var output = extract(input);
			shakeIt();
			$(".result").text(output);
			$("input").val("");
		};
	});
});