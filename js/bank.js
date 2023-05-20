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

document.getElementById('deposite-button').addEventListener('click', function () {
    /* 
    const inputDepositeField = document.getElementById('deposite-field');
    const inputDepositeText = inputDepositeField.value;
    const inputDeposite = parseFloat(inputDepositeText); 
    */

    const inputDeposite = getInputValue('deposite-field');

    /* 
    const previousDepositeTotal = document.getElementById('deposit-total');
    const previousDepositeText = previousDepositeTotal.innerText;
    const previousDeposite = parseFloat(previousDepositeText);

    const depositeTotal = previousDeposite + inputDeposite;
    previousDepositeTotal.innerText = depositeTotal; 
    */

    updateTotalField('deposit-total', inputDeposite);


    const balanceTotalDeposite = document.getElementById('balance-total');
    const balanceTotalDepositeText = balanceTotalDeposite.innerText;
    const depositeBalanceTotal = parseFloat(balanceTotalDepositeText);
    const totalBalanceAfterDeposite = depositeBalanceTotal + inputDeposite;
    balanceTotalDeposite.innerText = totalBalanceAfterDeposite;
});


document.getElementById('withdraw-button').addEventListener('click', function () {

    /* const inputWithdrawField = document.getElementById('dwithdraw-field');
    const inputWithdrawText = inputWithdrawField.value;
    const inputWithdraw = parseFloat(inputWithdrawText); 
    */

    const inputWithdraw = getInputValue('dwithdraw-field');

    /* 
    const previousWithdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = previousWithdrawTotal.innerText;
    const previousWithdraw = parseFloat(previousWithdrawText);

    const withdrawTotal = previousWithdraw + inputWithdraw;
    previousWithdrawTotal.innerText = withdrawTotal; 
    */

    updateTotalField('withdraw-total', inputWithdraw);

    const balanceTotalWithdraw = document.getElementById('balance-total');
    const balanceTotalWithdrawText = balanceTotalWithdraw.innerText;
    const withdrawBalanceTotal = parseFloat(balanceTotalWithdrawText);
    const totalBalanceAfterWithdraw = withdrawBalanceTotal - inputWithdraw;
    balanceTotalWithdraw.innerText = totalBalanceAfterWithdraw;
});