function triangleType(a, b, c){
  var sides = [a, b, c].sort(function(a, b){return a-b});
  if (sides[0] + sides[1] <= sides[2]){
    return 0;
  } else if (Math.pow(sides[0], 2) + Math.pow(sides[1], 2) === Math.pow(sides[2], 2)){
    return 2;
  } else if (Math.pow(sides[0], 2) + Math.pow(sides[1], 2) < Math.pow(sides[2], 2)){
    return 3;
  } else if (Math.pow(sides[0], 2) + Math.pow(sides[1], 2) > Math.pow(sides[2], 2)){
    return 1;
  }
}



// Tests
console.log(triangleType(7,3,2))
console.log(triangleType(2,4,6))
console.log(triangleType(8,5,7))
console.log(triangleType(3,4,5))
console.log(triangleType(7,12,8))

