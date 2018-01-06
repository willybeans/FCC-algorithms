const roman = {
  1: "I", 4: "IV", 5: "V", 6: "VI",9: "IX",10: "X",40: "XL",50: "L",60: "LX",90: "XC",
  100: "C", 400: "CD", 500: "D", 600: "DC", 900: "CM", 1000: "M"
};
function convertToRoman(num){
  var counter = 1, array = [], first, final;
  while (num > 0) {
    first = (num % 10) * counter;//gives you smallest digit
    while (first > 0) {
      if (roman[first]) {
        array.splice(0,0,roman[first]);
        first -= first;
      } else {
        first -= counter;
        array.splice(0,0,roman[counter]);
      }
    }
    counter *= 10;
    num = Math.floor(num / 10); //remove lowest digit
  }
  console.log(array.join(''));
  // return array.join('');
}

convertToRoman(227);
