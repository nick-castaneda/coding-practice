//
function answer(rabbitsInTrainCars){
  var totalRabbits = 0;
  for(i=0; i<rabbitsInTrainCars.length; i++){
    totalRabbits += rabbitsInTrainCars[i];
  }
  if(totalRabbits % rabbitsInTrainCars.length == 0) return rabbitsInTrainCars.length;
  else return rabbitsInTrainCars.length - 1;
}

console.log(answer([1, 4, 1]));
console.log(answer([1, 2]));
console.log(answer([98, 0, 0, 0 , 0]));
