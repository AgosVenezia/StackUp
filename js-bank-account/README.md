# Bank Account Management Website

This website allows you to manage your bank account. You can deposit money, withdraw money, and check your balance.

## Deployment status

[![Netlify Status](https://api.netlify.com/api/v1/badges/5227ebf0-d2eb-4198-a054-a8902b1b268f/deploy-status)](https://aguito-bankaccount-management.netlify.app/)

## :round_pushpin: Instructions

1. Select the action you want to perform from the dropdown menu.
2. Enter the amount of money you want to deposit or withdraw.
3. Click the button to perform the action.

## :bookmark_tabs: Classes

I used classes to encapsulate the code for each of the different actions. This makes the code more organized and easier to maintain.

For example, the `BankAccount` class contains the code for managing the balance of the account. The `Deposit` class contains the code for depositing money into the account. The `Withdraw` class contains the code for withdrawing money from the account.

## :file_folder: Switch Statements

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

## :gear: Try-Catch-Finally Statements

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

## :heart: Support

<p><a href="https://www.buymeacoffee.com/agosvenezia"> <img align="center" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="40" width="192" alt="agosvenezia" /></a>
<a href='https://cafecito.app/agosvenezia' rel='noopener' target='_blank'><img align="center" srcset='https://cdn.cafecito.app/imgs/buttons/button_2.png 1x, https://cdn.cafecito.app/imgs/buttons/button_2_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_2_3.75x.png 3.75x' src='https://cdn.cafecito.app/imgs/buttons/button_2.png' height="40" width="192" alt='Invitame un café en cafecito.app' /></a></p>
