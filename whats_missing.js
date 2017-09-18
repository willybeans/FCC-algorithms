
function missing(str) {
  //97 = a || 122 = z
  //65 = A || 90 = Z
  var array = str.split('');
  var id;
    for (let i = 0; i < array.length; i++) {
         id = array[i]
      // i === array.length then this is the last number
      // i === 0 then this is the first number
      //simply create a new array that has numbers spanning from start to finish
      //wait. but you need to return the missing character...
      //ok so compare the existing array with the new array and if {[x]doesnt //match} the we return that non matched number... :-) OK BYE
         }
  console.log(id);
}
missing("abd");
