var oldArray = [12, 45, 6, 23, 19, 20, 20, 15, 30, 42];
var newArray = [];

for(i=(oldArray.length-1);i>=0;i--){
    newArray.push(oldArray[i]);
}

console.log(newArray);

function timesTwoMinusOne(x){
    return x*2-1;
}

var newArray = [1,2,3,4,5].map(timesTwoMinusOne);

console.log(newArray);