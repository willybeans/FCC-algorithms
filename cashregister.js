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

    let change = cash - price;
    let arrayIndex = cid.length - 1;

    if(change > 0) {
      returnMessage = cashierGivesChange(cid, change, returnValues, moneyValues, returnMessage);
      return returnMessage;
    } else if(change === 0) {
      returnMessage.status = returnValues.CLOSED;
    return returnMessage;
  }

}

function cashierGivesChange(cid, change, returnValues, moneyValues, returnMessage){

  let totalCashInDrawer = 0;
  cid.forEach( x => {
    totalCashInDrawer = totalCashInDrawer + x[1];
  });
  let roundedTotal = totalCashInDrawer.toFixed(2);

  if(roundedTotal < change) {
    returnMessage.status = returnValues.INSUFICIENT_FUNDS;
    return returnMessage;
  } else if (roundedTotal === change) {
    reutnrMessage.status = returnValues.CLOSED;
    returnMessage.change = cid;
  } else {
    while ((change > 0) && (arrayIndex >= 0)) {
      let currentCurrency = moneyValues[cid[arrayIndex][0]];
      if(currentCurrency <= change) {
        cid[arrayIndex][1] -= currentCurrency;
        change -= currentCurrency;
      } else {
          console.log('else');
          arrayIndex--;
      }
    }

  }





}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
