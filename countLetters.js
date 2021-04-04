// // FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const errorMessage = `❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`;
  const successMessage = `✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`

  // console.assert(`${actual}` === `${expected}`, {successMessage});
  // console.assert(`${actual}` !== `${expected}`, {errorMessage});
  if (actual === expected) {console.log(successMessage)
  }else{console.log(errorMessage)
  }


};

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);


/*
The bellow function should take in a sentence (as a string) and
return a count of each of the letters in teh sentence.
 */

const countLetters = (str) => {
  let stringCopy = str.replace(/\W/g, '');
  let report = {};
  let stringCatcher = '';
  for (let letter in stringCopy) {
    stringCopy.match(/[a-zA-Z]/g) ? letterIncrementer() : console.log('no match');
    function letterIncrementer() {
      report[`${stringCopy[letter]}`] = 0; // creating key value pair
      stringCatcher += stringCopy[letter];
      // console.log(stringCopy[letter]);
    }
  }
  
  for( let i in stringCatcher){
    //console.log(stringCatcher[i]);
     report[`${stringCatcher[i]}`] +=1 ;
  }

  console.log( /*stringCatcher,*/report/*str, stringCopy*/);
}




 //  Test code below 
//countLetters('Joacquim Mukadi')

countLetters('houseee')
countLetters('lighthouse in the house')
const string = 'lighthouse in the house'
countLetters(string);
assertEqual(string,'lighthouse in the house')