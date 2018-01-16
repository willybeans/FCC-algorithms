function uniteUnique(arr) {
  var newArr = [];
  var test;
  for (var i = 0; i < arguments.length; i++){
    for (var j = 0; j < arguments[i].length; j++){

      test = arguments[i][j];

      if(newArr.indexOf(test) === -1){
        newArr.push(arguments[i][j]);
      }
    }
  }

  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
