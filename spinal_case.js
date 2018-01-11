function spinalCase(str) {
  var testString, newArray = [];

  var testAlpha = /[^a-zA-Z\d\s-]/g; //all non alphanumeric except -
  var testCaps = /[A-Z]/g; //caps
  var testWhite = /\s/g; //whitespace
  var stringArray = str.split('');

  for(var i = 0; i < stringArray.length; i++){
    if (testAlpha.test(stringArray[i])){ //if non-alphanumeric convert to "" 
      newArray.push("");
    } else if (testWhite.test(stringArray[i])){ //if whitespace convert to -
      newArray.push("-");
    } else if ((testCaps.test(stringArray[i]) && i != 0) && (testWhite.test(stringArray[(i-1)]) === false)){
      newArray.push(" ");
      newArray.push(stringArray[i]); //place whitepsace before all cap letters unless there is already whitepace
    } else {
      newArray.push(stringArray[i]);
    }
  }
  testString = newArray.join('');

  return testString = testString.toLowerCase()
                      .replace(testWhite, (match) => {
                          return "-";
                        });

}

spinalCase("The_Andy_Griffith_Show");

// function replacerWhite(match){
//     return "-";
//   }
