function givePoints(letter){
  switch (letter.toLowerCase()){
    case "a":
      return 1;
    case "b":
      return 2;
    case "c":
      return 3;
    case "d":
      return 4;
    case "e":
      return 5;
    case "f":
      return 6;
    case "g":
      return 7;
    case "h":
      return 8;
    case "i":
      return 9;
    case "j":
      return 10;
    case "k":
      return 11;
    case "l":
      return 12;
    case "m":
      return 13;
    case "n":
      return 14;
    case "o":
      return 15;
    case "p":
      return 16;
    case "q":
      return 17;
    case "r":
      return 18;
    case "s":
      return 19;
    case "t":
      return 20;
    case "u":
      return 21;
    case "v":
      return 22;
    case "w":
      return 23;
    case "x":
      return 24;
    case "y":
      return 25;
    case "z":
      return 26;
  }
}

function answer(rabbitNameArr){
  var namesAndPointValues = [];
  for(i=0; i<rabbitNameArr.length; i++){
    var pointValue = 0;
    for(j=0; j<rabbitNameArr[i].length; j++){
      pointValue += givePoints( rabbitNameArr[i][j] )
    }
    namesAndPointValues[i] = [rabbitNameArr[i], pointValue];
  }

  namesAndPointValues = namesAndPointValues.sort(function(a,b){
    if(b[1] === a[1]) { console.log(b[0] + a[0]); return b[0] - a[0] }
    else { return b[1] - a[1] };
  })
  var professorFavorites = [];
  for(i=0;i<namesAndPointValues.length; i++){
    professorFavorites.push(namesAndPointValues[i][0])
  }
  return professorFavorites;
}

console.log (answer(["AL", "CJ", "Jessica"]) )
