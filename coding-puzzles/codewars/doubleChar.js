'use strict'

function doubleChar(str){
  var newStr = "";
  for(let i = 0; i < str.length; i++){
    newStr += str[i] + str[i];
  }
  return newStr
}






console.log(doubleChar("Myyyy naaaaammmeee isssss NNNNNNiccccckkk"))



// function doubleChar(str) {
//   var newString = "";
//   for(let i = 0; i < str.length; i++){
//     if(i == 0) newString += str[0];
//     else if (str[i] !== newString[newString.length - 1]) newString += str[i];
//   }
//   return newString;
// }
