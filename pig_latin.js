function translatePigLatin(str) {
  const consonants = /[b-df-hj-np-tv-z]/;
  var counter = 0;
  var ay = "ay";
  var way = ["way"];
  var consonantArray = [];
  var array = str.split("");
  var firstChars = str.substr(0, 1);

  if (consonants.test(firstChars)) {
  while (consonants.test(firstChars)){
    counter++;
    firstChars = str.substr(counter, 1);
    consonantArray = array.shift();
    array.push(consonantArray);
    //break infinite loop
    if (counter > str.length){
      console.log("you broke it");
      break;
    }
  }
    array.push(ay);
  } else {
    array = array.concat(way);
  }
  array = array.join('');
  console.log(array);
}
translatePigLatin("california");
