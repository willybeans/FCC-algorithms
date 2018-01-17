/* create a closure that adds the two received arguments
ex: (2,3) should evaluate to 5
*/
function addTogether(args) {
  return function(y) {
   return args + y;
  };
}

addTogether(2)(3);
