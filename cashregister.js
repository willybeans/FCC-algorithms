function checkCashRegister(price, cash, cid) {
    const moneyValues = {
      'PENNY': 0.01,
      'NICKEL': 0.05,
      'DIME': 0.10,
      'QUARTER': 0.25,
      'ONE': 1,
      'FIVE': 5,
      'TEN': 10,
      'TWENTY': 20,
      'ONE HUNDRED': 100
    };
    const returnValues = {
      INSUFICIENT_FUNDS: 'INSUFICIENT_FUNDS',
      CLOSED: 'CLOSED',
      OPEN: 'OPEN'
    };

    let returnMessage = {
      status: '',
      change: []
    };

    let ammountDue = cash - price;
    let arrayIndex = cid.length - 1;

    if(ammountDue > 0) {
      returnMessage = cashierGivesammountDue(cid, ammountDue, returnValues, moneyValues, returnMessage);
      console.log(returnMessage);
      return returnMessage;
    } else if(ammountDue === 0) {
      returnMessage.status = returnValues.OPEN;
    return returnMessage;
  }

}

function cashierGivesammountDue(cid, ammountDue, returnValues, moneyValues, returnMessage){
  let totalCashInDrawer = 0;
  cid.forEach( x => {
    totalCashInDrawer = totalCashInDrawer + x[1];
  });
  let roundedTotal = totalCashInDrawer.toFixed(2);
  let arrayIndex = cid.length - 1;

  if(roundedTotal < ammountDue) { //return if there isnt enough money
    returnMessage.status = returnValues.INSUFICIENT_FUNDS;
    return returnMessage;
  } else if (roundedTotal === ammountDue) { // return if change is exact to drawer
    returnMessage.status = returnValues.CLOSED;
    returnMessage.change = cid;
    return returnMessage;
  } else { //begin converting ammountDue to change for customer
    while ((ammountDue > 0) && (arrayIndex >= 0)) {
      let currentCurrency = moneyValues[cid[arrayIndex][0]];
      if(currentCurrency <= ammountDue) {
        cid[arrayIndex][1] -= currentCurrency;
        ammountDue -= currentCurrency;
        if (returnMessage.change.length === 0){
          returnMessage.change.push([cid[arrayIndex][0], currentCurrency]);
        } else {
          console.log('length ' + returnMessage.change.length);
          for (let i = 0; i < returnMessage.change.length; i++) {
            console.log(returnMessage.change[i]);
            console.log('current ammount ' + returnMessage.change[i][1]);
            console.log('money values' + cid[arrayIndex][0])
            if (returnMessage.change[i][0] === cid[arrayIndex][0]){
              returnMessage.change[i][1] += currentCurrency;
            } else if (i === returnMessage.change.length - 1
              && returnMessage.change[i][0] != cid[arrayIndex][0]) {
                returnMessage.change.push([cid[arrayIndex][0], currentCurrency]);
              }
          }
        }
        //returnMessage.change.push([cid[arrayIndex][0], currentCurrency]);
          console.log(
            `
          ammountDue: ${ammountDue}
          currentCurrency: ${currentCurrency}
          returnMessage.change: ${returnMessage.change}
          returnMessage.change[0]: ${returnMessage.change[0][0]}
          returnMessage.change[1]: ${returnMessage.change[1]}
          returnMessage.change.length: ${returnMessage.change.length}
            `
          );
      } else {
        arrayIndex--;
      }
    }
    //add a thing to say closed if change in drawer is empty
    return returnMessage;
  }

}

checkCashRegister(14, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
