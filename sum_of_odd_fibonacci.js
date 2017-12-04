// function sumFibs(num) {
//   var a = 1;
//   var b = 1;
//   var total = 0;
//   var oddTotal = 2;
//   var finalSum;
//
//   while (oddTotal < num){
//    if (total % 2 != 0){
//         oddTotal = oddTotal + total;
//         finalSum = oddTotal;
//         if(oddTotal < num) { //this is to fix the issue of adding to total TOO SOON
//           finalSum = oddTotal;
//           console.log(finalSum+"_");
//         }
//       }
//       total = a + b;
// you need to add a condition in here to check the value of the two integers before being added together.
       // if (a < total && b < total) {
       //     you know what i mean?
       //    }
//       console.log("a: " + a);
//       console.log("b: " + b);
//       b = a;
//       a = total;
//
//     }
//     console.log(finalSum);
// }
//
// sumFibs(1000);
//this doesnt work ....
// function sumFibs(num) {
//   var a = 1;
//   var b = 1;
//   var total = 0;
//   var oddTotal = 2;
//   var finalSum;
//
// do {
//   if (total % 2 != 0){
//        oddTotal = oddTotal + total;
//        if(oddTotal < num) {
//          finalSum = oddTotal;
//          console.log(finalSum+"_");
//        }
//      }
//      total = a + b;
//      console.log("a: " + a);
//      console.log("b: " + b);
//      b = a;
//      a = total;
//
//    }
// while (oddTotal < num);
//  console.log(finalSum);
// }
//
// sumFibs(1000);

function sumFibs(num) {
  var a = 1;
  var b = 1;
  var total = 0;
  var oddTotal = 2;
  var finalSum;

  while (oddTotal < num){
   if (total % 2 != 0){ //will only contribute negative integers to the total

        oddTotal = oddTotal + total;
        finalSum = oddTotal;

        if(oddTotal < num) { //this is to fix the issue of adding to total TOO SOON
          finalSum = oddTotal; 
        }
      }
      total = a + b;
//you need to add a condition in here to check the value of the two integers before being added together.
       if (a < num && b < num) {

          }
      b = a;
      a = total;

    }
    console.log(finalSum);
}
