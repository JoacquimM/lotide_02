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


const eqArrays = (arr1, arr2) => {
  let answer = '';

  Array.isArray(arr1 && arr2) ? arrayFunc() : primitiveFunc();
    
    function arrayFunc(){
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
          answer = true;
        } else{
          answer = false;
        }
      }
    }
    function primitiveFunc(){
      if (arr1 === arr2) {
        answer = true;
      } else{
        answer = false;
      }
    }
    console.log(answer);
    return(answer);

};
// ---- beloe how to use above function 
eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays(27, 27);
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);



// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  let answer = '';
  let obj1Copy = object1;
  let obj2Copy = object2;
  let obj1length = Object.keys(obj1Copy).length;
  let obj2length = Object.keys(obj2Copy).length;
  let points = 0;
  obj1length === obj2length? objCompare() : answer = false;
  function objCompare(){

    for ( let key in obj1Copy){
      // obj1Copy[key] === obj2Copy[key] ? console.log('yes') : console.log('no'); // checks match of the keys
      obj1Copy[key] === obj2Copy[key] ? points+= 1 : console.log('no'); // checks match of the keys
    }
    let obj1Values = Object.keys(obj1Copy).join('');
    let obj2Values = Object.keys(obj2Copy).join('');
    //obj1Values.match(/[obj2Values]/g) ? console.log('HELL YEAH') : console.log('FUCK NO') ;
    obj1Values.match(/[obj2Values]/g) ? points += 1 : answer = false;
    //console.log(obj1Values, obj2Values);
  }
  obj1length + 1 === points ? answer = true : answer = false ;
  console.log(/*obj1length, obj2length,*/ answer /*, points*/);
  return answer;
};

/*
    key,obj1Copy[key]
      a 1
      b 2
      2 2 
*/



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true );
assertEqual(eqObjects(ab, abc), false );