// Complete the solution so that it strips all text that follows any of a set of
// comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples

// The output expected would be:

// apples, pears
// grapes
// bananas

const input = "apples, pears # and bananas\ngrapes\nbananas !apples";

//console.log("apples, pears\ngrapes\nbananas");

console.log(input.split("\n"));
