// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const errorMessage = `❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`;
  const successMessage = `✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`

  // console.assert(`${actual}` === `${expected}`, {successMessage});
  // console.assert(`${actual}` !== `${expected}`, {errorMessage});
  if (actual === expected) {console.log(successMessage)
  }else{console.log(errorMessage)
  }


};

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);


const findKey = (obj, callback) =>{
for (let key in obj){
  if( callback(obj[key])){
    
    //console.log(key)
    return key;
  }
}
return undefined;
}



x = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log("This is x -->",x)

assertEqual(x , "noma")