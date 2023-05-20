// input field value
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const input = parseFloat(inputText);
    inputField.value = '';
    return input;
}

// total value catch for deposite and withdraw
function updateTotalField(totalFieldId, inputValue) {
    const totalField = document.getElementById(totalFieldId);
    const totalFieldText = totalField.innerText;
    const totalAmmount = parseFloat(totalFieldText);
    const updateAmmount = totalAmmount + inputValue;
    totalField.innerText = updateAmmount;
    return updateAmmount;
}

// total balance
function currentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const updateBalanceTotal = parseFloat(balanceTotalText);
    return updateBalanceTotal;
}
function totlaBalance(inputValue, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const updateBalanceTotal = currentBalance();
    if (isAdd == true) {
        const balance = updateBalanceTotal + inputValue;
        balanceTotal.innerText = balance;
    }
    else {
        const balance = updateBalanceTotal - inputValue;
        balanceTotal.innerText = balance;
    }
}

document.getElementById('deposite-button').addEventListener('click', function () {
    const inputDeposite = getInputValue('deposite-field');
    // error handle
    if (inputDeposite > 0) {
        updateTotalField('deposit-total', inputDeposite);
        totlaBalance(inputDeposite, true);
    }
});


document.getElementById('withdraw-button').addEventListener('click', function () {
    const inputWithdraw = getInputValue('withdraw-field');
    const availabeBalance = currentBalance();
    // error handle
    if (inputWithdraw > availabeBalance) {
        const balanceError = document.getElementById('balance-error-handle')
        balanceError.innerText = 'You have not enough Balance';
    }
    if (inputWithdraw > 0 && inputWithdraw < availabeBalance) {
        updateTotalField('withdraw-total', inputWithdraw);
        totlaBalance(inputWithdraw, false);
    }
});