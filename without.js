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
//------ first working one changes original array no good
// const without = (source, itemsToRemove) => {
//   let newArray = [];
//   for (let i = 0; i < itemsToRemove.length; i++) {
//     for(let j = 0;j < source.length; j++){
//     if (itemsToRemove[i] === source[j]){
//       source.splice(j,1)
//     }
//   }
// }
// console.log(source)
// }




const without = (source, itemsToRemove) => {
  let newArray = [];
  if(itemsToRemove.length < source.length){
    for(let i = 0; i < itemsToRemove.length; i++){
      let testElem = itemsToRemove[i];
      for(let j=0; j <source.length; j++){
        if(testElem !== source[j]){
          newArray.push(source[j]);
        }
      }
    }
  }
  if(itemsToRemove.length >= source.length){
    for (i = 0; i < itemsToRemove.length; i++){
      if(itemsToRemove[i] !== source[i]){
        newArray.push(source[i]);
      }
    }
  }
  console.log(newArray)
};

without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEquals(words, ["hello", "world", "lighthouse"]);