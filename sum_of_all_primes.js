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
