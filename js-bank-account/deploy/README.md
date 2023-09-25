# Bank Account Management Website

This website allows you to manage your bank account. You can deposit money, withdraw money, and check your balance.

## Instructions

1. Select the action you want to perform from the dropdown menu.
2. Enter the amount of money you want to deposit or withdraw.
3. Click the button to perform the action.

## Classes

I used classes to encapsulate the code for each of the different actions. This makes the code more organized and easier to maintain.

For example, the `BankAccount` class contains the code for managing the balance of the account. The `Deposit` class contains the code for depositing money into the account. The `Withdraw` class contains the code for withdrawing money from the account.

## Switch Statements

I used switch statements to handle the different actions that the user can perform. This makes the code more readable and easier to maintain.

For example, the following switch statement is used to determine which action the user wants to perform:

```
const action = switcher.options[switcher.selectedIndex].value;

switch (action) {
    case "deposit":
    // Deposit money
    break;
    case "withdraw":
    // Withdraw money
    break;
    case "checkBalance":
    // Check balance
    break;
}
```

## Try-Catch-Finally Statements

I used try-catch-finally statements to handle errors that might occur. This makes the code more robust and ensures that the website does not crash if an error occurs.

For example, the following try-catch-finally statement is used to deposit money into the account:

```
try {
    account.deposit(Number(amountInput.value));
    } catch (error) {
    alert(error.message);
    } finally {
    amountInput.value = "";
}
```