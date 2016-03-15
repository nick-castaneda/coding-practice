var tempsInF = [100, 72, 88, 15, 25, 32];
var tempsInC = [];

function convertFC(far){
    return Math.round((far - 32) * (5/9));
}

for(i=0;i<tempsInF.length;i++){
    tempsInC.push(convertFC(tempsInF[i]));
}

console.log(tempsInC);