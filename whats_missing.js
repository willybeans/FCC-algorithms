
function fearNotLetter(str) {
  //97 = a || 122 = z
  //65 = A || 90 = Z
  var array = str.split('');
  var missingLetter;
  var a;
  var b;

    for (let i = 0; i < array.length; i++) {
        a = array[i]; //set letters
        b = array[(i+1)]; //so this is getting set to higher than the array

          if ( i < array.length){
            console.log("hi");
      a = a.charCodeAt(); //convert to numbers

      b = b.charCodeAt();
      } //still geting this annoying error

        if ((b - a) === 2){ // if missing space
          missingLetter = String.fromCodePoint(b - 1);
          console.log(missingLetter);
        //  return;
        }
        if ( i === array.length){
//so if the letters are in a sequence you need to send back undefined. whoops.
//so figure out why this isnt working
          console.log("this isnt working...")
          return;
        }
    }

}
fearNotLetter("yz");
