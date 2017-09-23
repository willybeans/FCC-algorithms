
function fearNotLetter(str) {
  //97 = a || 122 = z
  //65 = A || 90 = Z
  var array = str.split('');
  var end;
  var start = array[0];
  var end;
  var length = array.length;

    for (let i = 0; i < array.length; i++) {
         if (i === 0){
           start = array[i].charCodeAt();
         } else if (i = length) {
           end = array[i].charCodeAt();
         }

    }
  console.log("length: " + length);
  console.log("start: " + start);
  console.log("end" + end);
}
fearNotLetter("abce");

// i === array.length then this is the last number
// i === 0 then this is the first number
//simply create a new array that has numbers spanning from start to finish
//wait. but you need to return the missing character...
//ok so compare the existing array with the new array and if {[x]doesnt //match} the we return that non matched number... :-) OK BYE
