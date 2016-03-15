function answer(document, searchTerms){
  var output = [];
  var docWordArray = document.split(' ');
  // Loop through each word in the doc
  for(i=0; i<docWordArray.length; i++){
    var snippetArray = [];


    if(searchTerms.indexOf(docWordArray[i]) >= 0){
      var matchArray = [];
      searchTerms.forEach(function(word){
        matchArray.push(word)
      });

      for(j=i; j<docWordArray.length; j++){
        if(matchArray.length > 0){
          if(searchTerms.indexOf(docWordArray[j]) >= 0){
            matchArray.splice( matchArray.indexOf(docWordArray[j]), 1 );
          }
          snippetArray.push(docWordArray[j]);
        }
      }
      if(matchArray.length !== 0) snippetArray = [];
    }


    // If there is a match or if the snippet array is shorter than the
    // current word array
    if(output.length == 0 || ( output.length > snippetArray.length && snippetArray.length > 0)){
      output = snippetArray;
    }
  }


  return output; //join it
}

console.log(answer("hi my name is nick duh nick my break my name nick this up is hi", ["nick", "is", "my"]))
