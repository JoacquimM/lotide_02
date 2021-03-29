// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const errorMessage = `❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`;
  const successMessage = `✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`;
  // Below checks for match with assertion. 
  actual === expected? console.log(successMessage): console.log(errorMessage);
};

//TAIL function : Returns the "tail" of an array: everything except for the first item (head) of the provided array.
// const tail = (arr) => {
//   let tailArray = [];
//   for(let i = 1; i < arr.length; i++) {
//    tailArray.push(arr[i])
//   }

//   console.log(tailArray);
//   return tailArray;
// }


// Top  tail function function refectored
const tail = (arr) => {
  let tailArray = [];
  for (let i in arr) {
   tailArray.push(arr[i])
  }

  tailArray.splice(0,1)
  console.log(tailArray);
  return tailArray;
}

const words = ["Yo Yo", "Lighthouse", "Labs"]

//------- TETS ----------------
//test case 1: showcases that assertEqual can not  compare array values. 
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!


//Test case 2(the actual test for tail):  to check that original words array was not modified 
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
