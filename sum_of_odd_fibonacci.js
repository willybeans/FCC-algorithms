function sumFibs(num) {
  var a = 1;
  var b = 1;
  var total = 1;
  var oddTotal = 2;

  while (total < num){
      b = a;
      a = total;
      total = a + b;
       if (total % 2 != 0 && total <= num){
             oddTotal = oddTotal + total;
       }
    }
    console.log(oddTotal);
    return oddTotal;
}

sumFibs(75025);
