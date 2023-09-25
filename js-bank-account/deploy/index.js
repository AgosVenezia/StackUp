class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
      this.accountNumber = accountNumber;
      this.accountHolderName = accountHolderName;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        throw new Error("Insufficient funds");
      }
  
      this.balance -= amount;
    }
  
    checkBalance() {
      return this.balance;
    }
  }
  
  const account = new BankAccount("1234567890", "John Doe", 1000);
  
  const switcher = document.querySelector("select");
  const amountInput = document.querySelector("input[name='amount']");
  const balanceOutput = document.querySelector("span[id='balance']");

  const updateBalanceDisplay = () => {
    const balanceAmount = document.querySelector("#balanceAmount");
    balanceAmount.textContent = account.checkBalance();
  };  
  
  const depositButton = document.querySelector("#depositButton");
  depositButton.style.display = "inline";
  depositButton.addEventListener("click", () => {
    try {
      account.deposit(Number(amountInput.value));
      updateBalanceDisplay(); // Actualizar el saldo al depositar
      //balanceOutput.textContent = account.checkBalance();
      amountInput.value = ""; // Limpiar el campo de entrada
    } catch (error) {
      alert(error.message);
    }
  });
  
  const withdrawButton = document.querySelector("#withdrawButton");
  withdrawButton.addEventListener("click", () => {
    try {
      account.withdraw(Number(amountInput.value));
      updateBalanceDisplay();
      //balanceOutput.textContent = account.checkBalance();
      amountInput.value = "";
    } catch (error) {
      alert(error.message);
    }
  });
  
  const checkBalanceButton = document.querySelector("#checkBalanceButton");
  checkBalanceButton.addEventListener("click", () => {
    updateBalanceDisplay();
    //balanceOutput.textContent = account.checkBalance();
    amountInput.value = "";
  });
  
  switcher.addEventListener("change", () => {
    const option = switcher.options[switcher.selectedIndex];
    const action = option.value;
  
    if (action === "deposit") {
      depositButton.style.display = "inline";
      withdrawButton.style.display = "none";
      checkBalanceButton.style.display = "none";
    } else if (action === "withdraw") {
      depositButton.style.display = "none";
      withdrawButton.style.display = "inline";
      checkBalanceButton.style.display = "none";
    } else if (action === "checkBalance") {
      depositButton.style.display = "none";
      withdrawButton.style.display = "none";
      checkBalanceButton.style.display = "inline";
    }
  });

  //balanceOutput.textContent = "Balance: " + account.checkBalance().toString();