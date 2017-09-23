
function fearNotLetter(str) {
  //97 = a || 122 = z
  //65 = A || 90 = Z
  var array = str.split('');
  var start = array[0];
  var end;
  var length = array.length - 1;
  var test;

    for (let i = 0; i < array.length; i++) {
        if (i === length) {
          end = array[i];
          start = start.charCodeAt();
          end = end.charCodeAt();
          test = end - start;
        }
    }

  console.log("missing letter?: " + test);
  console.log("start: " + start);
  console.log("end: " + end);
}
fearNotLetter("abce");

// i === array.length then this is the last number
// i === 0 then this is the first number
//simply create a new array that has numbers spanning from start to finish
//wait. but you need to return the missing character...
//ok so compare the existing array with the new array and if {[x]doesnt //match} the we return that non matched number... :-) OK BYE
