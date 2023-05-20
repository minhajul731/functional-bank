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
function totlaBalance(inputValue, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const updateBalanceTotal = parseFloat(balanceTotalText);
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
    const inputWithdraw = getInputValue('dwithdraw-field');
    // error handle
    if (inputWithdraw > 0) {
        updateTotalField('withdraw-total', inputWithdraw);
        totlaBalance(inputWithdraw, false);
    }
});