function shot(probability){
  return probability > Math.random()
}

var prob, fg_outof_total;
function throwPrac(){
  prob = 0
  fg_outof_total = [1, 2];
  for(i=2; i<98; i++){
    prob = fg_outof_total[0] / fg_outof_total[1]
    if(shot(prob)){
      fg_outof_total[0] ++; fg_outof_total[1] ++;
    } else {
      fg_outof_total[1] ++;
    }
  }
  fg_outof_total[0] ++;
  fg_outof_total[1] ++; // 99th

  return Number(fg_outof_total[0] / fg_outof_total[1]); //prob of 100th
}




var total = throwPrac();
for(i=1; i<1000; i ++){
  total += throwPrac();
}

console.log(total)


