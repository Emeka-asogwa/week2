let creditLimit = 50;

const loanOut = function(amount) {
  return new Promise((resolve,reject) => {
    if (creditLimit <= 0) {
      reject('Insufficient Funds!');
    } else if (creditLimit > 0 && creditLimit < amount) {
      amount = creditLimit;
      creditLimit -= amount;
      resolve(amount);
    } else {
      creditLimit -= amount;
      resolve(amount);
    }

  });

};

console.log(`Asking for $150, which should be okay ...`);
loanOut(150)
  .then((amountReceived) => {
    console.log(`\t-> I got $${amountReceived} loan from the bank! Remaining Credit Limit: $${creditLimit}`);
  })
  .catch((err) => {
    console.log(`\t-> Error: ${err}!`);
  });

