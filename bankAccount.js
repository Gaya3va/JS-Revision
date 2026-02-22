function createBankAccount() {
  let balance = 0;
  let history = [];

  return {
    deposit(amount) {
      if (amount <= 0) return "Invalid amount";
      balance += amount;
      history.push(`Deposit ${amount}`);
      return balance;
    },

    withdraw(amount) {
      if (amount <= 0) return "Invalid amount";
      if (amount > balance) return "Insufficient balance";

      balance -= amount;
      history.push(`Withdraw ${amount}`);
      return balance;
    },

    getBalance() {
      return balance;
    },

    getTransactionHistory() {
      return [...history];
    }
  };
}