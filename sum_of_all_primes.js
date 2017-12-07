function sumPrimes(num) {
  //so it either equals 1, or itself.
  //what if you just check if it can be evenly divided by half of itself
  var final = 0;
  var a;
   // console.log(25%3)
   // return;
  for (var i = 0; i < num; i++){
    a = i%2;
// so you need to add a qualifier that is checking for both
//i%2 and i%3. if either === 0 then its prime.
//this is on top of the prexisiting conditions you already have
    console.log("-------");
    if((a === 1 || i===2) && (i > 1)){ // this isnt right because its receiving 9.
      console.log("first: "+i);
      if ((i%2 != 0 && i%3 != 0) || (i === 2 || i === 3)){
        console.log("prime #: "+i);
        final = final+i;
        console.log("calc: "+final)
        //this now doesnt work because it will receive 25 as prime
        //which it shouldnt  because 25%2 = 1.
        /* i think this would work if you could use the positive
        instead of the negative as the if statement condition.
        like if %2 or %3 === 0 then DONT do this lol.
        because %2 returns 1 for 9, but %3 returns 0.
        */
      }

    }
  }

  console.log("final: "+final);
}

sumPrimes(30);
