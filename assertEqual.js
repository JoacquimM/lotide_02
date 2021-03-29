// 02

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const errorMessage = `❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`;
  const successMessage = `✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`

  actual === expected? console.log(successMessage): console.log(errorMessage);

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);