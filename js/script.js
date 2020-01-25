// Business at the top

// Check user input for "3"
function checkThree(number){
	if (number.includes(3)){
		output = "I'm sorry Dave, I'm afraid can't do that.";
		return output;
	} else {
		output = checkTwo(number);
		return output;
	};
};

// Check user input for "2"
function checkTwo(number){
	if (number.includes(2)){
		output = "BOOP";
		return output;
	} else {
		output = checkOne(number);
		return output;
	};
};

// Check user input for "1"
function checkOne(number){
	if (number.includes(1)){
		output = "BEEP";
		return output;
	} else {
		output = extract(number);
		return output;
	};
};

// Output range of number from 0 until the user's input
function extract(number){
	var range = [];
	for (var i = 0; i < number; i++){
		range.push(i);
	};
	return range;
};

// Animate Hal
function shakeIt(likeAPolaroidPicture) {
  var div = $("#shake");
  var interval = 100;
  var distance = 10;
  var times = likeAPolaroidPicture;

  $(div).css('position', 'relative');

  // Shake no, if Hal is afraid he can't do that
  if (likeAPolaroidPicture === 4) {
  	for (var iter = 0; iter < (times + 1) ; iter++) {
      $(div).animate({
          left: ((iter % 2 == 0 ? distance : distance * -1))
      }, interval);
  }                                                                                                          
  $(div).animate({ left: 0 }, interval);
  
  // Shake yes to get the beeps and boops out
  } else {
    for (var iter = 0; iter < (times + 1) ; iter++) {
        $(div).animate({
            top: ((iter % 2 == 0 ? distance : distance * -1))
        }, interval);
    }                                                                                                          
    $(div).animate({ top: 0 }, interval);
  };
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
			var output = checkThree(input);
			if (output.includes("Dave")) {
				output = output.replace("Dave", name);
				shakeIt(4);
			} else if (output.includes("B")) {
				shakeIt(1);
			};
			$(".result").text(output);
			$("input").val("");
		};
	});
});