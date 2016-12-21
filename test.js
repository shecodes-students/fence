var test = require("tape");
var arrayCompare = require("number-array-compare");
var roundNumber = require("round-numbers");
var tolerantArrayCompare = require("number-array-compare");
var test = require("tape-catch");

test("fence() should return true. Expected result to be [3,8]", function(t){
    t.equal(arrayCompare(fence(3,8,2),[3,8]),true);
    t.end();
});
test("fence() should return true. Expected fence() to return roughly 3,8", function(t){
    t.equal(tolerantArrayCompare(roundNumbers(fence(3,8,4)),[3,4.67,6.33,8],0.06), true);
    t.end();
});
test("fence() should throw an error, if count < 2", function(t){
    t.equal(fence(3,8,1),false);
    t.end();
});
test("fence() still runs this test inspite of errortesting the test before", function(t){
    t.equal(1+1,2, "this still ran!");
    t.end();
});
