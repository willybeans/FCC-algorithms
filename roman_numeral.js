function convertToRoman(num) {
 var test = (""+num).split(""); //turn number into an array
 var counter = 1, test2 = [];
 const roman = {
   1: "I",
   4: "IV",
   5: "V",
   6: "VI",
   9: "IX",
   10: "X",
   40: "XL",
   50: "L",
   60: "LX",
   90: "XC",
   100: "C",
   400: "CD",
   500: "D",
   600: "DC",
   900: "CM",
   1000: "M"
 };

  for (let i = (test.length - 1); i>0; i--){
    let a = Number(test[i]); //convert to int
    let b = false;
    if (!roman[a]){ //doesnt account for number 0
       b = true;
    }
    console.log(a);
    // while(b) {
    //   if (a === 0) {
    //     b=false;
    //   } else if (roman[a]){ //if number exists in array, push to new array
    //   test2.splice(0, 0, roman[a]);
    //   b = false;
    // }
    //  //if number doesnt exist, count down with 1's,10's, or 100's, until met
    //   test2.splice(0,0,roman[counter]);
    //   a -= 1;
    //   console.log("inside else: "+test2+ " A: " + a);
    // }
    // counter = (""+counter).split(""); //add a 0 to the end of the counter
    // counter.push('0');
    // counter = Number(counter.join(''));
  }
 return test2;
}

convertToRoman(5);
