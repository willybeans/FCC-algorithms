
function fearNotLetter(str) {
  //97 = a || 122 = z
  //65 = A || 90 = Z
  var array = str.split('');
  var missingLetter;
  var a;
  var b;
  //instead of adding, you should subtract

    for (let i = 1; i < array.length; i++) {
        a = array[i-1]; //set letters
        b = array[i];

        a = a.charCodeAt(); //convert to numbers this is fine
        b = b.charCodeAt();

        if ((b - a) === 2){ // if missing space
          missingLetter = String.fromCodePoint(b - 1);
          return missingLetter;
        } if ( i === array.length && (b-a) === 1 ){
          return undefined;
        }
    }
}
fearNotLetter("abce");
