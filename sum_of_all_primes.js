// function sumPrimes(num) {
//
//   var final = 0;
//
//   for (var i = 0; i < num; i++){
//     if(i > 1 && i <= num){
//      // console.log("first: "+i);
//       if (i === 2 || i === 3){
//         final = final+i;
//       } else if ((i%2 === 0 || i%3 === 0)){
//        // console.log("not prime #: "+i);
//       } else {
//         console.log("prime: "+i);
//         final = final+i;
//      //   console.log("calc: "+final)
//       }
//
//     }
//   }
//
//   console.log(final);
// }
//
// sumPrimes(977);

function sumPrimes(num) {
  var total = 0, sieve = [], primes = [];
  for (var i = 2; i <= num; i++){
    if (!sieve[i]){
      primes.push(i); //pushes 2 first to the list...
      for (j = i << 1; j <= num; j += i){ //im not clear on the << and the += operators
        sieve[j] = true;
      }
    }
  }
for (i = 0; i < primes.length; i++){
  total = total + primes[i];
}
console.log(total);
}

sumPrimes(10);
