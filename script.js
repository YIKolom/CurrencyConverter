function calculate() {
    const btcPriceInput = document.getElementById('btcPrice');
    const usdAmountInput = document.getElementById('usdAmount');

    let btcPriceText = btcPriceInput.value;
    let usdAmountText = usdAmountInput.value;

    if (btcPriceText == '' || usdAmountText == '') {
        alert('Input values must not be empty!');
        return;
    }

    btcPriceText = btcPriceText.replace(',', '.');
    usdAmountText = usdAmountText.replace(',', '.');

    const btcPrice = Number(btcPriceText);
    const usdAmount = Number(usdAmountText);

    if (!Number.isFinite(btcPrice) || !Number.isFinite(usdAmount) ||
        btcPrice <= 0.0 || usdAmount <= 0.0) {
        alert('Input values must be positive numbers and greater than zero!');
        return;
    }

    const btcAmount = usdAmount * btcPrice;

    let result = "<span>You can buy</span>";
    result += ` <span id='btcamount'>${btcAmount.toFixed(7)}</span> `;
    result += "<span>BTC</span>";
    
    const resultArea = document.getElementById('resultarea');
    resultArea.innerHTML = result;
}