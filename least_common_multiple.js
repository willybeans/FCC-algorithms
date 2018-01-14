
function smallestCommons(arr) {
  var array = [], test = [], counter = 0, matches = 0;
  var a = (arr[0] < arr[1]) ? arr[0] : arr[1];
  var b = (a === arr[0]) ? arr[1] : arr[0];

  generateNestedArray(a,b,array);

//console.log(array.length);
//this needs to be in a while loop so it keeps happening
while ((counter < 263341))
{
  for (var i = 0; i < array.length; i++){ //here is our counter loop
      var y = array[i].length - 1;
      var x = array[i][0] + array[i][y];
      array[i].push(x);
  }

  for (var i = 0; i < array[0].length; i++) {
      array.forEach( (num) => {
        num.forEach( (numNum) => {
         if (numNum === array[0][i]){
           test.push(numNum);
           matches ++;
         }
        })
    });
    if (test.length === array.length){
      console.log("solution: " + test)
    } else {
      test = [];
      matches = 0;
    }
  }
  console.log(counter);
  counter++
}
//console.log(array);
}


smallestCommons([23,18]);

function generateNestedArray(a,b,array){
  while (a <= b){
    array.push([a]);
    a++;
  }
}
