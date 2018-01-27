

function truthCheck(collection, pre) {
  // Is everyone being true?
  var test = [];
  collection.forEach( (x, index) => {
    if (x[pre]) {
      test.push(index + " " + x);
    }
    //so x[pre] grabs all the cases we want.
    //so perhaps test for that in here?
  });
  
  if (test.length === collection.length){
    return true;
  } else {
    return false;
  }

  return test;
}


truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
