function randomCarSale(){
  var n = Math.floor(Math.random() * 95 + 5);
  choices_array = [n, n + 1, n + 2, n + 3, n + 4]
  return choices_array;
}

function randPick(num){
  return Math.floor(Math.random() * num);
}

function expected_skip_cost(arr){
  if (arr.length == 1) return 500 // So you keep going
  else if (arr.length ==2)
}

function dealerGame(){
  cards_array = randomCarSale();
  var firstPick = randPick(5);
  var known_to_player = [cards_array[firstPick]];





  cards_array.splice(firstPick, 1);
  var secondPick = randPick(4);
  cards_array.splice(secondPick, 1);
  var thirdPick = randPick(3);
  cards_array.splice(secondPick, 1);
  var fourthPick = randPick(2);
  cards_array.splice(secondPick, 1);
  var fifthPick = 1


  return cards_array
}


console.log(dealerGame());
