
class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let balance = 0;
    for (let t of this.transactions) {
      balance += t.value;
    }
    return balance
  }

  addTransactions(transaction) {
    this.transactions.push(transaction);
  }

}
//need to fix validation - it's not working if you bump the balance up over 100

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {

    //my attempt
    // if (this.isAllowed()) {
    //   this.time = new Date();
    //   this.account.addTransactions(this);
    // }
    if (!this.isAllowed()) {
      return false;
    } else {
      this.time = new Date();
      this.account.addTransactions(this);
      return true;
    }
  }

}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }
  //my attempt:
  // isAllowed() {
  //   if (this.account.balance + this.value <= 0) {
  //     return false;
  //   }
  //   return true;
  // }

  isAllowed() {
    return (this.account.blance - this.amount >= 0)

  }
}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

  isAllowed() {
    return true;
  }
}



const myAccount = new Account("snow-patrol");

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);
console.log('Account Balance: ', myAccount.balance)


t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 2:', t2);
console.log('Account Balance:', myAccount.balance);

t3 = new Deposit(120.00, myAccount);
t3.commit();
console.log("Transaction 3:", t3);
console.log('Ending Balance: ', myAccount.balance);
