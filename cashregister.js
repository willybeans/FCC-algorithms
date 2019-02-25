function checkCashRegister(price, cash, cid) {
  //step one is to subtract the cash given from
  //the price
  //step two you now have a value left over which needs to make use of whats in the register
  //at this point i would need to write logic for what to prioritize in the cash register.
  //to which i would say always start top down
  //so register function should be
  //a) top down ...by...
  //b) subtraction? if less than 0, go to the next key?
  /*
  ok so it will loop from top down. for each iteration it will reduce by one currency,
  then loop back through all the currencies again.
  The probblem i can see immediately is the lack of checking
  the drawer values. And also, how would you iterate through
  the values in the proper order? You would receive the array
  in order i hope, so in that case i would be able to assume
  that the last value would be the one to start with.

  so lets say 50 cents is left, when it finally loops
  and gets to the quarters, perhaps it should be more efficient
  and keep looping over quarters until quarters arent relevant/available

  so it needs to prioritize the availability of the specific change
  

*/
  const money = {
  'PENNY': 0.01,
  'NICKEL': 0.05,
  'DIME': 0.10,
  'QUARTER': 0.25,
  'ONE': 1,
  'FIVE': 5,
  'TEN': 10,
  'TWENTY': 20
  'ONE HUNDRED': 100
}
  var change;
  // Here is your change, ma'am.
  return {
  status: '',
  change: ''
  };
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
