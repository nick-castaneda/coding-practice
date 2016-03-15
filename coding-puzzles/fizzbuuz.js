function fizzbuzz(max){
    for(i=1;i<=max;i++){
        if(i%3===0){
            if(i%5===0){
                console.log("fizzbuzz");
            }else{
                console.log("fizz");
            }
        }else if(i%5===0){
            console.log("buzz");
        }else{
            console.log(i);
        }
    }
}

fizzbuzz(5);