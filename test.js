var test = require('tape');
var arrayCompare = require('number-array-compare').arrayCompare;
var tolerantArrayCompare = require('number-array-compare').tolerantArrayCompare;
var fence = require('./index');

test("if called with count==2, fence() should return an array containing two values: the start and the end position.", function(t) {
	var test_positions = fence(3,8,2);
	t.equal(arrayCompare(test_positions, [3,8]), true);
	t.end();
});


test("if called with count > 2, fence() should return an array containing the start and the end position and interpolated values.", function(t) {
	var test_positions = fence(3,8,4);
	var shouldBeResult = [3,4.67,6.33,8];
	t.equal(tolerantArrayCompare(test_positions, shouldBeResult, 0.005), true);
	t.end();
});

test("errorCase: Expected thrown error if count < 2", function(t) {
	try {
		fence(3,8,1);
		t.fail("fence() should have thrown an error but it didn't");
	} catch(e) {
		if (e.message.match(/two or higher/)) {
			t.pass("fence() has thrown an error");
		} else {
			t.fail(e.message);
		}
	}
	t.end();
});


