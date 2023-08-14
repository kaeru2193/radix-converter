const BigNumber = require("bignumber.js");
const convertButton = document.getElementById('convert');
convertButton.addEventListener("click", () => {
    const inputNum = document.getElementById('number');
    const stringToConvert = String(inputNum.value);
    const inputBase = document.getElementById('beforebase');
    const beforeBase = Number(inputBase.value);
    const outputBase = document.getElementById('afterbase');
    const toConvertBase = Number(outputBase.value);
    const inputDigit = document.getElementById('digit');
    const numberOfDigits = Number(inputDigit.value);
    let converted;
    try {
        BigNumber.config({ DECIMAL_PLACES: numberOfDigits });
        const num = BigNumber(stringToConvert, beforeBase);
        converted = num.toString(toConvertBase);
    }
    catch (_a) {
        converted = "エラー";
    }
    let displayArea = document.getElementById('display');
    displayArea.innerHTML = String(converted);
});
