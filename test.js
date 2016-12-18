var test = require('tape');
var arrayCompare = require('./index').arrayCompare;

test("trivialCase: arrayCompare() should return true. Expected result to be [3,8].", function(t) {
	t.equal(arrayCompare(test_positions, [3,8]), true);
	var test_positions = fence(3,8,2);
	t.end();
});

test("normalCase: arrayCompae() should return true. Expected fence to return roughly: " + shouldBeResult, function(t) {
	t.equal(arrayCompare(test_positions, shouldBeResult), true);
	var test_positions = roundNum(fence(3,8,4));
	var shouldBeResult = [3,4.67,6.33,8];
	t.end();
});



test("errorCase: Expected thrown error if count < 2", function(t) {
	t.equal(fence(3,8,1), false);
	t.end();
});


/*
function errorCase() {
	try { 
		fence(3,8,1);
		console.log("Test failed: Expected thrown error if count < 2");
		// if this line is reached, it means fence did not
		// throw an error.
	} catch(err) {}
}
*/
