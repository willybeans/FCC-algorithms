
function smallestCommons(arr) {
  var array = [], test = [], counter = 0, match = 0;
  var a = (arr[0] < arr[1]) ? arr[0] : arr[1];
  var b = (a === arr[0]) ? arr[1] : arr[0];
  generateNestedArray(a,b,array);
  var arrayLength = array.length;


//console.log(array.length);
//this needs to be in a while loop so it keeps happening
while (match === 0){
  for (var i = 0; i < arrayLength; i++){ //here is our counter to add one to each part
      var y = array[i].length - 1;
      var x = array[i][0] + array[i][y];
      array[i].push(x);
  }
var last = array[0].length - 1; //we are only testing the last case

for (var i = arrayLength - 1; i >= 1; i--) {
  // console.log("test number: " + array[0][last]);
  // console.log("test case: " + array[i])
  for (var j = 0; j <= last; j++){
    //console.log("internal case: "+ array[i][j])
    if (array[i][j] === array[0][last]) {
      test.push(array[i][j]);
    }
  }
}

    if (test.length === (array.length - 1)){
      console.log("solution: " + test)
      match = test[0];
      return test[0];
    } else {
      test = [];
    }

    counter++;
  }
}


console.log(smallestCommons([23,18]));

function generateNestedArray(a,b,array){
  while (a <= b){
    array.push([a]);
    a++;
  }
}
