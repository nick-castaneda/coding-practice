// Calculates score for rolling 1s
function onePoints(num_of){
  var points = 0;
  if (num_of >= 3){ points += 1000; num_of -= 3; }
  if (num_of === 2) points += 200;
  else if (num_of == 1) points +=100;
  return points;
}

// Calculates score for rolling 5s
function fivePoints(num_of){
  var points = 0;
  if (num_of >= 3){ points += 500; num_of -= 3; }
  if (num_of === 2) points += 100;
  else if (num_of == 1) points +=50;
  return points;
}

// Calculates score for rolling anything else
function otherPoints(num_of,side_val){
  if (num_of >= 3) return ( 100 * side_val );
  else return 0;
}

// main funcion
function score( dice ) {
  var counters = [null,0,0,0,0,0,0];
  for(i=0;i<5;i++){
    counters[dice[i]] ++;
  }
  return (onePoints(counters[1]) + fivePoints(counters[5]) + otherPoints(counters[2], 2) + otherPoints(counters[3], 3) + otherPoints(counters[4], 4)  + otherPoints(counters[6], 6));
}


console.log(score([2,2,2,5,1]));


