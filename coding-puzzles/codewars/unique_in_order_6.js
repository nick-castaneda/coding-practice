var uniqueInOrder=function(iterable){
  if(iterable.length === 0) return [];
  var answer_array = [];
  answer_array.push(iterable[0]);
  for(i=1; i<iterable.length; i++){
    if (iterable[i] !== iterable[i-1]) answer_array.push(iterable[i]);
  }
  return answer_array;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
