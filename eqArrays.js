// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const errorMessage = `❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`;
  const successMessage = `✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`;
  // Below checks for match with assertion. 
  actual === expected? console.log(successMessage): console.log(errorMessage);
};

const eqArrays = (arr1, arr2) => {
  let answer = '';
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      answer = true;
    } else{
      answer = false;
    }
  }
  console.log(answer);
  return(answer);

};

// Test Code bellow 

eqArrays([1, 2, 3], [1, 2, 3]);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

eqArrays([1, 2, 3], [3, 2, 1]) 
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

eqArrays(["1", "2", "3"], ["1", "2", "3"])
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);

eqArrays(["1", "2", "3"], ["1", "2", 3])
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false);