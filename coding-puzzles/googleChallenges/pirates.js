function answer(numbers){
  var countArr = [];
  var position = 0;

  while(maxNumb(countArr)){
    countArr[position] ? countArr[position] ++: countArr[position] = 1;
    position = numbers[position];
  }
  return countLoop(countArr);
}

function maxNumb(arr){
  for(i=0; i<arr.length; i++){
    if (arr[i] == 3) return false;
  }
  return true;
}

function countLoop(arr){
  var counter = 0;
  for(i=0; i<arr.length; i++){
    if(arr[i] == 2 || arr[i] == 3) counter ++;
  }
  return counter;
}


console.log(answer([2, 0, 1, 0]));
