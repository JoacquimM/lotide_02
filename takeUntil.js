
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


////----------------------------------------------------------------

// takeUntil which will keep collecting items from a provided array 
// until the callback provided returns a truthy value.

// call back should only be  provide one value : the item in the array
const takeUntil = function(array , callback) {
  // ...
  let arrayUntil = [ ]

  for (let item of array){ 
    if (callback(item)){ 
      return arrayUntil
    }else{
     arrayUntil.push(item)
      }
     
  }

  return arrayUntil;
}


// --- callback function for the first number arrays --- 
const numCallBackFunc = function(itemInArray){

return itemInArray < 0 ;
}



// --- callback function for the second strig array ---
// const numCallBackFunc = function(){
//   // TODO: this function should return -1 
//   }


// ----- run the tests below ----

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1 , numCallBackFunc/*, x => x < 0*/);
console.log(results1);

// console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEquals(results1, [ 1, 2, 5, 7, 2 ] );
assertArraysEquals(results2, [ "I've", 'been', 'to', 'Hollywood' ]);