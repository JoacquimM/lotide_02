// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const errorMessage = `❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`;
  const successMessage = `✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`;
  // Below checks for match with assertion. 
  actual === expected? console.log(successMessage): console.log(errorMessage);
};

// Returnes the head which is the first elemnt in a array.
const head = (arr) => {
  return arr[0];

};

// TEST CODE for assertEqual 
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// TEST CODE for head function  within assertEqual
assertEqual(head([5,6,7]), 5);
assertEqual(head([5,6,7]), 7);

assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Lighthouse");