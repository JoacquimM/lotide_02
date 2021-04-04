

/*
belo function
- eqArrays which takes in two arrays and 
 returns true or false, based on a perfect match.
 (checks to see if two arrays passed are of 
 same value and type , returns true if passed ad false if fail)
*/

const eqArrays = (arr1, arr2) => {
  let answer = '';
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      answer = true;
    } else{
      answer = false;
    }
  }
  // console.log(answer);
  return(answer);

};
/*
below function 
 - assertArraysEqual which will take in two arrays and 
   console.log an appropriate message to the console.
   (checks to see if two array passed 
    are of same type and retuns a pass or failing message.
    does this by firts using the eqArray function, which compares 
    the that two arrays are the same, this function would retun 
    a true or false that assertArraysEquals stores in test variable. whatever the test variable
    value is depending of the result of eqArray, a corresponding message will be console logged 
    as a result of the if conditional statements. this is similar to the function assert equal 
    but tweeked to be able to compare two arrays.
    )
*/

const assertArraysEquals = (arr1, arr2) => {
  const errorMessage = `❌ ❌ ❌ Assertion Failed: ${arr1} !== ${arr2}`;
  const successMessage = `✅ ✅ ✅ Assertion Passed: ${arr1} === ${arr2}`;

  let test = eqArrays(arr1, arr2);
  if ( test === true){
    console.log(successMessage);
  } else {
    console.log(errorMessage);
  }

}

// assertArraysEquals([1, 2, 3], [1, 2, 3]);
// assertArraysEquals([1, 2, 3], [3, 2, 1]);
// assertArraysEquals(["1", "2", "3"], ["1", "2", "3"]);
// assertArraysEquals(["1", "2", "3"], ["1", "2", 3]);



// const words = ["ground", "control", "to", "major", "tom"];

// const map = function(array, callback) {
//   const results = [];

//   for (let item of array) {
//     console.log('item BEFORE: ', item);
//     console.log('item AFTER: ', callback(item)); // callback references the map function and is passed as second argument 
//     console.log('---');
//   }

//   return results;
// }


// const results1 = map(words, word => word[0]);
// console.log(results1);
/*
    OUTPUT

item BEFORE:  ground
item AFTER:  g
---
item BEFORE:  control
item AFTER:  c
---
item BEFORE:  to
item AFTER:  t
---
item BEFORE:  major
item AFTER:  m
---
item BEFORE:  tom
item AFTER:  t
---
[]
*/




//----------------------------------------------------------------

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item)); // callback references the map function and is passed as second argument 
  }

  return results;
}


const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEquals(results1, [ 'g', 'c', 't', 'm', 't' ]);