function myReplace(str, before, after) {
  var array = str.split(" ");
  var fixCase;

  var before = before.split("");
  var after = after.split("");
  //compare and replace with uppercase
      if(before[0] === before[0].toUpperCase()){
        after.splice(0,1,after[0].toUpperCase());
      }
    before = before.join("");
    after = after.join("");
  //find word to replace
    for(var i=0;i<array.length;i++){
      if(array[i] === before){
        array.splice(i, 1, after);
      }
    }
   return array.join(" ");
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
