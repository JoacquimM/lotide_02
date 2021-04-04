
// /*
// below function
// - eqArrays which takes in two arrays and 
//  returns true or false, based on a perfect match.
//  (checks to see if two arrays passed are of 
//  same value and type , returns true if passed ad false if fail)
// */

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

//---below code creates array for spaces too---

const letterPositions = (sentence) => {
  let stringCopy = sentence /*.replace(/\W/g, '')*/;
  let report = {};
  let noMatch = 0;
  
  let stringCatcher = '';
  for (let letter in stringCopy) {
    stringCopy.match(/[a-zA-Z]/g) ? letterIncrementer() : noMatch += 0;
    function letterIncrementer() {

      report[`${stringCopy[letter]}`] = []; // creating key value pair
      stringCatcher += stringCopy[letter];
      // console.log(stringCopy[letter]);
    }
  }
  
  for( let i in stringCatcher){
    //console.log(stringCatcher[i]);
     //report[`${stringCatcher[i]}`] +=1 ;
     //was here
     report[`${stringCatcher[i]}`].push(parseInt(i)) ;
     
  }
  delete report[' '];
  console.log( /*stringCatcher,*/report/*str, stringCopy*/);
  return report
};

// --------- 

// letterPositions('lighthouse in the house');

// Test code below 

assertArraysEquals(letterPositions('lighthouse in the house').l, [0]);
assertArraysEquals(letterPositions('hello').e, [1]);




// -------- this code creates arrays only for letters ie: creatLetterArray() -----

// const letterPositions = (sentence) => {
//   let stringCopy = sentence /*.replace(/\W/g, '')*/;
//   let report = {};
//   let noMatch = 0;
  
//   let stringCatcher = '';
//   for (let letter in stringCopy) {
//     stringCopy.match(/[a-zA-Z]/g) ? letterIncrementer() : noMatch += 0;
//     function letterIncrementer() {
//       stringCopy[letter].match(/[a-zA-Z]/g) ? creatLetterArray(): noMatch += 0;

//       function creatLetterArray(){
//         report[`${stringCopy[letter]}`] = []; // creating key value pair
//       stringCatcher += stringCopy[letter];
//       // console.log(stringCopy[letter]);
//       }
      
//     }
//   }
  
//   for( let i in stringCatcher){
//     console.log(stringCatcher[i]);
//      //report[`${stringCatcher[i]}`] +=1 ;
//      //was here
//      report[`${stringCatcher[i]}`].push(i) ;
//   }

//   console.log( /*stringCatcher,*/report/*str, stringCopy*/);
// };