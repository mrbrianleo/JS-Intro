// Consider the following code fragment

var a = "3";
var b = 2;
var c = b + a;


// Q: What is the value of c?
// A: "23"


// Write to the best if your understanding
// why c is the value that it is.

// Since a is a string c is going to be a concatenation of b + a, with is really 2 + "3",
// but because of type coercion the 2 becomes a string "2" so c really = "2" + "3" and result is "23".



var str = "Version " + 5 + 1;


// Q: What is the value of str?
// A: "Version 51"


// Write to the best if your understanding
// why str is the value that it is. How could
// it be altered to result in 6 instead of 51?

// Same concept as above since there is a string the value, type coercion comes into play and converts the
// 5 and the 1 to strings so var str really = "Version " + "5" + "1";

// You could alter with the below
// var a = 5;
// var b = 1;
// var c = a + b;
// var str = "Version " + c

// OR

// You could change to var str = "Version " + (5 + 1);

