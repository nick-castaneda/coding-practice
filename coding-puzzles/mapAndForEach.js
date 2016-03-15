var stringArray = ["My","name","is","nicholas","castaneda"];

function stringLength(x){
    console.log(x.length);
    return(x.length);
}

stringArray.forEach(stringLength);

console.log("break");

var lengthArray = stringArray.map(stringLength);
console.log(lengthArray);