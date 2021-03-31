/*
-  Below function compares two arrays and ethere will return true or false 
*/
const eqArrays = require('./eqArrays.js');
const assertArraysEquals = require('./assertArraysEquals.js');


// required above 


// const eqArrays = (arr1, arr2) => {
//   let answer = '';
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] === arr2[i]) {
//       answer = true;
//     } else{
//       answer = false;
//     }
//   }
//   // console.log(answer);
//   return(answer);

// };
/*
- below function compares tow arrways 
  checks that they are the same ,if so prints succes message else prints failure errorMessage
  similar to asserEqual but tweeaked to comapre arrays.
*/

// required above 

// const assertArraysEquals = (arr1, arr2) => {
//   const errorMessage = `❌ ❌ ❌ Assertion Failed: ${arr1} !== ${arr2}`;
//   const successMessage = `✅ ✅ ✅ Assertion Passed: ${arr1} === ${arr2}`;

//   let test = eqArrays(arr1, arr2);
//   if ( test === true){
//     console.log(successMessage);
//   } else {
//     console.log(errorMessage);
//   }

// }

/*
middle function should return an array with only the middle 
element(s) of the provided array. This means that the 
length of the returned elements could vary.
*/

const middle = (arr) => {
  
  let newArray = arr.length <= 2 ? [] : midArrayElems();
  function midArrayElems(){ 
    
    let middleElems = arr.length % 2 === 0 ? even() : odd();
    function odd(){
       let oddArrayCopy = [...arr]
       let indexOdd = (((oddArrayCopy.length - 1) / 2) + 1) - 1
       return oddArrayCopy.splice(indexOdd,1)
    };
    function even(){
      let evenArrayCopy = [...arr]
      let indexEven = ((((evenArrayCopy.length - 2) / 2) + 2) - 2); // 2 start add 1
      return evenArrayCopy.splice(indexEven,2)//answer for even array passed.
    };
    return middleElems;
  }

  // console.log(newArray, arr);// this is your answer 
  console.log(newArray);
}


//Test Code  --- below ---
// commented out below to  to seperate test code friom function 

// middle([1, 2, 3, '4', 5, 6]);
// middle([1, 2, 3,])
// middle([1, 2, true, 4, 5])


// assertEqualArray to check if passed array was not modified

// const array = [1, 2, 3, '4', 5, 6];
// middle(array);


// uncomment  to use function ( Make sure to require assertArraysEquals() to middleTest.js ) 
// assertArraysEquals(array,[1, 2, 3, '4', 5, 6]);


/*
Reference of how assertArraysEquals() works.
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEquals(words, ["hello", "world", "lighthouse"]);
*/

module.exports = middle;