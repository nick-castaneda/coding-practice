function calculateYears(principal, interest, tax, desired) {
  var years = 0;
  var current_amount = principal;

  while (current_amount < desired){
    var invest_return = (interest * current_amount) * (1 - tax) ;
    current_amount += invest_return;
    years ++;
    console.log(current_amount);
  }


  return years;
}


console.log(calculateYears(1000, 0.05, 0.18, 1100))
